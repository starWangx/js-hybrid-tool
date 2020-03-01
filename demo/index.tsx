///<reference types='webpack-env' />

import React, {useEffect} from 'react';
import { render } from 'react-dom';
import LazyLoadImg from '../src/toolkit/Lazyer'
var ul = document.getElementById('list')
// @ts-ignore
setTimeout(()=>{
    var lazyLoadImg = new LazyLoadImg({
        el: document.querySelector('#list'),
        mode: 'diy', //默认模式，将显示原图，diy模式，将自定义剪切，默认剪切居中部分
        time: 300, // 设置一个检测时间间隔
        complete: true, //页面内所有数据图片加载完成后，是否自己销毁程序，true默认销毁，false不销毁
        position: { // 只要其中一个位置符合条件，都会触发加载机制
            top: 0, // 元素距离顶部
            right: 0, // 元素距离右边
            bottom: 0, // 元素距离下面
            left: 0 // 元素距离左边
        },
        diy: { //设置图片剪切规则，diy模式时才有效果
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center'
        },
        before: function () { // 图片加载之前执行方法
        },
        success: function (el: { classList: { add: (arg0: string) => void; }; }) { // 图片加载成功执行方法
            el.classList.add('success');
        },
        error: function (el: { src: string; }) { // 图片加载失败执行方法
            el.src = './images/error.png'
        }
    });
    lazyLoadImg.start()
},3000)

const App = () => {
    useEffect(()=>{


    },[])
    return <div className='main'>
        It's Your Omni Project

        <ul id="list">
            <img src='https://img9.doubanio.com/view/photo/l/public/p2493396475.webp' data-src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2210709729,2538592662&fm=15&gp=0.jpg" alt=""/>
            <img src='https://img9.doubanio.com/view/photo/l/public/p2493396475.webp' data-src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2210709729,2538592662&fm=15&gp=0.jpg" alt=""/>
            <img src='https://img9.doubanio.com/view/photo/l/public/p2493396475.webp' data-src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2210709729,2538592662&fm=15&gp=0.jpg" alt=""/>
            <img src='https://img9.doubanio.com/view/photo/l/public/p2493396475.webp' data-src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2210709729,2538592662&fm=15&gp=0.jpg" alt=""/>
            <img src='https://img9.doubanio.com/view/photo/l/public/p2493396475.webp' data-src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2210709729,2538592662&fm=15&gp=0.jpg" alt=""/>
            <img src='https://img9.doubanio.com/view/photo/l/public/p2493396475.webp' data-src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2210709729,2538592662&fm=15&gp=0.jpg" alt=""/>
            <img src='https://img9.doubanio.com/view/photo/l/public/p2493396475.webp' data-src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2210709729,2538592662&fm=15&gp=0.jpg" alt=""/>
            <img src='https://img9.doubanio.com/view/photo/l/public/p2493396475.webp' data-src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2210709729,2538592662&fm=15&gp=0.jpg" alt=""/>
            <img src='https://img9.doubanio.com/view/photo/l/public/p2493396475.webp' data-src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2210709729,2538592662&fm=15&gp=0.jpg" alt=""/>
            <img src='https://img9.doubanio.com/view/photo/l/public/p2493396475.webp' data-src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2210709729,2538592662&fm=15&gp=0.jpg" alt=""/>
            <img src='https://img9.doubanio.com/view/photo/l/public/p2493396475.webp' data-src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2210709729,2538592662&fm=15&gp=0.jpg" alt=""/>
            <img src='https://img9.doubanio.com/view/photo/l/public/p2493396475.webp' data-src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2210709729,2538592662&fm=15&gp=0.jpg" alt=""/>
            <img src='https://img9.doubanio.com/view/photo/l/public/p2493396475.webp' data-src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2210709729,2538592662&fm=15&gp=0.jpg" alt=""/>
            <img src='https://img9.doubanio.com/view/photo/l/public/p2493396475.webp' data-src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2210709729,2538592662&fm=15&gp=0.jpg" alt=""/>
            <img src='https://img9.doubanio.com/view/photo/l/public/p2493396475.webp' data-src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2210709729,2538592662&fm=15&gp=0.jpg" alt=""/>
            <img src='https://img9.doubanio.com/view/photo/l/public/p2493396475.webp' data-src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2210709729,2538592662&fm=15&gp=0.jpg" alt=""/>
            <img src='https://img9.doubanio.com/view/photo/l/public/p2493396475.webp' data-src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2210709729,2538592662&fm=15&gp=0.jpg" alt=""/>
            <img src='https://img9.doubanio.com/view/photo/l/public/p2493396475.webp' data-src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2210709729,2538592662&fm=15&gp=0.jpg" alt=""/>
            <img src='https://img9.doubanio.com/view/photo/l/public/p2493396475.webp' data-src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2210709729,2538592662&fm=15&gp=0.jpg" alt=""/>
            <img src='https://img9.doubanio.com/view/photo/l/public/p2493396475.webp' data-src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2210709729,2538592662&fm=15&gp=0.jpg" alt=""/>
            <img src='https://img9.doubanio.com/view/photo/l/public/p2493396475.webp' data-src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2210709729,2538592662&fm=15&gp=0.jpg" alt=""/>
            <img src='https://img9.doubanio.com/view/photo/l/public/p2493396475.webp' data-src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2210709729,2538592662&fm=15&gp=0.jpg" alt=""/>
            <img src='https://img9.doubanio.com/view/photo/l/public/p2493396475.webp' data-src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2210709729,2538592662&fm=15&gp=0.jpg" alt=""/>
            <img src='https://img9.doubanio.com/view/photo/l/public/p2493396475.webp' data-src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2210709729,2538592662&fm=15&gp=0.jpg" alt=""/>
            <img src='https://img9.doubanio.com/view/photo/l/public/p2493396475.webp' data-src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2210709729,2538592662&fm=15&gp=0.jpg" alt=""/>
            <img src='https://img9.doubanio.com/view/photo/l/public/p2493396475.webp' data-src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2210709729,2538592662&fm=15&gp=0.jpg" alt=""/>
            <img src='https://img9.doubanio.com/view/photo/l/public/p2493396475.webp' data-src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2210709729,2538592662&fm=15&gp=0.jpg" alt=""/>
            <img src='https://img9.doubanio.com/view/photo/l/public/p2493396475.webp' data-src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2210709729,2538592662&fm=15&gp=0.jpg" alt=""/>
            <img src='https://img9.doubanio.com/view/photo/l/public/p2493396475.webp' data-src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2210709729,2538592662&fm=15&gp=0.jpg" alt=""/>
            <img src='https://img9.doubanio.com/view/photo/l/public/p2493396475.webp' data-src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2210709729,2538592662&fm=15&gp=0.jpg" alt=""/>
            <img src='https://img9.doubanio.com/view/photo/l/public/p2493396475.webp' data-src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2210709729,2538592662&fm=15&gp=0.jpg" alt=""/>
            <img src='https://img9.doubanio.com/view/photo/l/public/p2493396475.webp' data-src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2210709729,2538592662&fm=15&gp=0.jpg" alt=""/>


        </ul>

    </div>
};

render(<App />, document.getElementById('root'));
if (module.hot) {
  module.hot.accept();
}