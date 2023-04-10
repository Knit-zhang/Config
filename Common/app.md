# 应用程序

目前采取的方案是将软件安装集中在 包管理工具 和 商店

主要原因有俩个:

1. 方便更新
2. 易于迁移

## 包管理工具

经过一些简单的测试, 目前包管理工具更适合下载一些开源软件和一些 Command-line Interface 工具, 商业软件更适合使用商店来进行集中管理, 下面列举自己常用的软件, 以 Scoop 为例

| 软件名  | 所属仓库 |    类别     |
| :-----: | :------: | :---------: |
| Calibre |  extras  | 书库 |
|Geekuninstaller|extras|卸载|
|Advancedrenamer|extras|文件名管理|
|Iperf3|main|网络传输检测|
|Ditto|extras|剪贴板|
|Typora|extras|markdown编辑器|
|Obsidian|extras|markdown笔记|
|Everything|extras|文件搜索|
|LICEcap|extras|gif录制|
|DeskPins|extras|窗口置顶|
|Snipaste|extras|截图|
|Qbittorrent|extras|下载|
|Neovim|main|文本编辑|
|Telegram|extras|聊天软件|
|Tor|main|洋葱路由器|
|HashCat|main|破解工具|
|GPG|main|加密工具|
|CrystalDiskInfo|extras|硬盘状态|
|CrystalDiskMark|extras|硬盘读写速度|
|AdvancedRenamer|extras|批量重命名|
|Cpu-z|extras|CPU 状态|
|Gpu-z|extras|GPU 状态|
|connect|main|ssh 代理|


## 应用商店

如 Microsoft Store, Steam 等, 常用软件如下

|  软件名  |      商店       |     类别     |
| :------: | :-------------: | :----------: |
| Bandizip | Microsoft Store |    解压缩    |
|   OBS    |      Steam      |  推流/录制   |
| Terminus | Microsoft Store |   SSH&SFTP   |
|  F.lux   | Microsoft Store | 屏幕护眼模式 |


## 迁移系统后安装代码(Windows10)

```powershell
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser #开启远程签名

$env:SCOOP="D:\Scoop" #设置Scoop自定义目录

$env:SCOOP_GLOBAL='D:\Global_Scoop' #设置全局程序安装位置

irm get.scoop.sh | iex #安装Scoop

scoop install 7zip git  aria2 #安装必装软件

scoop update #更新 scoop

scoop bucket add extras #添加 extras 库

scoop install calibre geekuninstaller iperf3 figlet sudo ditto typora obsidian everything deskpins qbittorrent tor telegram hashcat gpg crystaldiskinfo crystaldiskmark advancedrenamer LICEcap connect

scoop install python nodejs-lts lua  gcc gdb #常用编程环境安装

scoop install redis mongodb mariadb # 当用数据库安装
```


## docker 容器

|容器名|简介|
|:---:|---|
|vaultwarden| Bitwarden 的开源版本, 密码管理|
|Watchtower|自动更新容器|
|Homebox|内网测速工具|
|Qbittorrent|p2p下载器|
|aria2ng+aria2|aria2下载配合aria2 gui 界面|
|cloudreve|网盘|
|uptime-kuma|网页状态监控|
|portainer|docker gui管理|
