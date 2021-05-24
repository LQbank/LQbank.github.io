const ap = new APlayer({
    container: document.getElementById('aplayer'),
    // mini: false,
    fixed: true,//吸底模式
    autoplay: false,//默认是否自动播放
    theme: '#FADFA3',
    loop: 'all',
    order: 'random',
    preload: 'auto',
    volume: 0.7,//默认音量
    mutex: true,//是否不允许多个播放器同时播放
    listFolded: true,//是否默认收起播放列表
    listMaxHeight: 90,//播放列表的高度
    //lrcType: 3, //使用lrc文件提供歌词
    //网易云默认外链链接：http://music.163.com/song/media/outer/url?id=ID数字.mp3
    audio: [
        {
            name: '等到世界颠倒',
            artist: '卢卢快闭嘴',
            url: 'https://music.163.com/song/media/outer/url?id=1822712479.mp3',
            cover: 'https://p2.music.126.net/kMaOHZ9Es3B8ugvyeNN-Dw==/109951165770472771.jpg?param=90y90',
            //lrc: '/./dist/music/lrc/29751409.lrc',
            theme: '#46718b'
        },
        {
            name: '给你呀（又名：for ya）',
            artist: '蒋小呢',
            url: 'https://music.163.com/song/media/outer/url?id=1497588709.mp3',
            cover: 'https://p1.music.126.net/GI1Ex39x73zBT-1r7_o-sQ==/109951165494781109.jpg?param=90y90',
            theme: '#46718b'
        },
        {
            name: '理想三旬',
            artist: '陈鸿宇',
            url: 'https://music.163.com/song/media/outer/url?id=31445772.mp3',
            cover: 'https:////p2.music.126.net/cqTTEPAaxXG3cOwaE4E_-g==/109951163104103366.jpg?param=90y90',
            theme: '#46718b'
        }
    ]
});