#! /bin/bash
# Author: Kylezhang

# scripts will automatically download the latest docker and docker-compose, be sure that you've connected to the Internet. And script is on ubuntu.
[ $(id -u) -ne 0 ] && echo "请使用sudo执行该脚本" && exit 2
echo "******apt换源******“
echo "是否更换apt源（清华源）(y/N)?"
read apt_source;
if $apt_source == 'y' || $apt_source == 'Y'
then
	sed -i.bak "s/archive.ubuntu.com/mirrors.tuna.tsinghua.edu.cn/g" /etc/apt/sources.list
fi
echo "*******更新apt******"
apt update -y
apt upgrade -y
echo "*****安装相关软件*****"
apt install curl git
echo "*****安装docker*****"
echo "安装使用官方源，可能需要等待片刻"
curl -sSL get.docker.com | sh
echo "*****安装docker-compose****"
curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose
ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
echo "****安装完成****"



