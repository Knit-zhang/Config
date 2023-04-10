const fs = require('fs');
const md = require('markdown-it')();
const cheerio = require('cheerio');

const openFile = (file) => {
    const content = fs.readFileSync(file, 'utf-8')
    const html = md.render(content);
    return html;
}

const write2File = (file, output) => {
    const jsonString = JSON.stringify(output, null, 2);
    fs.writeFile(file, jsonString, (err) => {
        if (err) throw err;
        console.log(output[output.length - 1])
        console.log('Data written to file');
    });
}

// 解析 html
const html = openFile('../../songList.md');
const $ = cheerio.load(html);
const songList = [];

$('h2').each((index, element) => {
    const $a = $(element).find('a');
    const date = $a.text().replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3');
    const BV = $a.attr('href').match(/b.*?.[com|tv](?:\/vidio)?\/(BV[^\/]+)/)[1] ?? '';
    const remark = $a.attr('title')?.[0] ?? '';
    const songs = [];

    $(element).nextUntil('h2').filter('ol').find('li').each((index, element) => {
        const $li = $(element).text();
        const hour = $li.match(/^(\d{1,2}):(\d{2}):(\d{2})/)[1]
        const minute = $li.match(/^(\d{1,2}):(\d{2}):(\d{2})/)[2]
        const second = $li.match(/^(\d{1,2}):(\d{2}):(\d{2})/)[3]
        const time = `${hour}h${minute}m${second}s`
        const name = $li.match(/^\d{2}:\d{2}:\d{2}\s+([^\{\(\[]+)/)[1];
        const otherName = $li.match(/\((.+)\)/)?.[1] ?? '';
        const tags = $li.match(/\[(.+)\]/)?.[1].split(',').map(tag => tag.trim()) ?? [];
        const comment = $li.match(/\{(.+)\}/)?.[1] && '';

        songs.push( {time, name, otherName, tags, comment} );
    })

    songList.push( {date, BV, remark, songs} );
});

write2File('songList.json', songList);