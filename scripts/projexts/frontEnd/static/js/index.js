
export function main() {
    const container = document.getElementById('root');
    const xhr = new XMLHttpRequest();
    const dates =[];
    const playlist = []
    xhr.open('GET', '../static/data/songList.json');
    xhr.responseType = 'json';
    xhr.onload = () => {
        if (xhr.status === 200) 
            xhr.response.forEach(item => playlist.push(item));
            playlist.forEach(item => dates.push(new Date(item.date)))
            addStructure(playlist.at(-1))
    };
    xhr.send();

    const allRender = document.getElementById('allRender');
    let allRenderDone = false

    allRender.addEventListener('click', ()=> {
        if (allRenderDone === false) {
            playlist.slice(0, -1).reverse().map(index => addStructure(index));
            allRenderDone = true;
            allRender.innerText='清除';
        }
        else {
            allRender.innerText='全部';
            container.innerHTML = '';
            addStructure(playlist.at(-1));
            allRenderDone=false;
        }
    });

    const addStructure = (index) => {
        if (index.songs.length <= 3) return;
        container.innerHTML += `
            <div class="list-group col-2 m-2 overflow-y-hidden " id="${index.date}">
                <a href="https://www.bilibili.com/blackboard/webplayer/embed-whitelist-other.html?bvid=${index.BV}&page=1&autoplay=false" class="list-group-item bg-dark bg-gradient text-white user-select-none" target="frame" >${index.date}歌单</a>
            </div>
        `
        const li = document.getElementById(index.date);
        for (const song of index.songs) {
            li.innerHTML += `<a href="https://www.bilibili.com/video/${index.BV}?share_source=copy_web&t=${song.time}" target="_blank" class="list-group-item" ><span class="badge text-bg-secondary">${song.tags?.[0] ?? ''}</span>${song.name}</a>`;
        }
    }

    const searchDate = (date) => {
        return playlist.find(obj => obj.date === date);
    }
    
}