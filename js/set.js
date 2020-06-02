particlesJS('demo01',
  {
    "particles": {
      "number": {
        "value": 50,
        "density": {
          "enable": true,
          "value_area": 600
        }
      },
      "color": {
        "value": "#aab9ff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 7
        }
      },
      "opacity": {
        "value": 0.4,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 1,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#28b2ff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "repulse"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#ffffff",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }
);
/*
particlesJS('demo01',{
  "particles":{
  //シェイプの設定-------------
    "shape":{
      "type":"circle", //シェイプの形
      "stroke":{
        "width":num, //シェイプの線の太さ（なしの場合は0）
      },
    },
    "color":{
      "value":"#a491ff" //シェイプの塗り
    },
    "size":{
      "value":4, //シェイプの大きさ
      "random":true, //大きさをランダムにするか
      "anim":{
        "enable":false, //大きさをアニメーションさせるか
        "speed":num, //アニメーションスピード
        "size_min":num, //大きさの最小値
        "sync":false //全てのシェイプを同時にアニメーションさせるか
      }
    },
    "opacity":{
      "value":0.5, //シェイプの透明度（0 〜 1）
      "random":true, //透明度をランダムにするか
      "anim":{
        "enable":false, //透明度をアニメーションさせるか
        "speed":num, //アニメーションスピード
        "opacity_min":num, //透明度の最小値（0 〜 1）
        "sync":false //全てのシェイプを同時にアニメーションさせるか
      }
    },
    "number":{
      "value":128, //シェイプの数
      "density":{
        "enable":true, //シェイプの密集度を変更するか
        "value_area":868 //シェイプの密集度
      }
    },
  //---------------------
  //シェイプ間の線の設定----------
    "line_linked":{
      "enable":true, //線の有無
      "distance":200, //線をつなぐシェイプの距離
      "color":"#a491ff", //線の色
      "opacity":0.4, //線の透明度（0 〜 1）
      "width":1 //線の太さ
    },
  //------------------
  //動きの設定----------
    "move":{
      "speed":3, //シェイプの動くスピード
      "straight":false, //個々のシェイプの動きを止めるか
      "direction":"top-left", //エリア全体の動き
      "out_mode":"out" //エリア外に出たシェイプの動き
    }
  //------------------
  },
  "interactivity":{
    "detect_on":"canvas",
    "events":{
    //マウスオーバー時の処理----------
      "onhover":{
        "enable":false, //ホバーアクションの有無
        "mode":"repulse" //マウスオーバー時に発動する動き
      },
    //------------------
    //クリック時の処理----------
      "onclick":{
        "enable":true, //クリックアクションの有無
        "mode":"repulse" //クリック時に発動する動き
      },
      //------------------
  
    },
    "modes":{
    //カーソルとシェイプの間に線が表示される----------
      "grab":{
        "distance":num, //カーソルからの反応距離
        "line_linked":{
          "opacity":num //線の透明度（0 〜 1）
        }
      },
      //------------------
      //シェイプがカーソルから逃げる----------
      "repulse":{
        "distance":100 //カーソルからの反応距離
      },
      //------------------
      //シェイプが膨らむ----------
      "bubble":{
        "distance":num, //カーソルからの反応距離
        "size":num, //シェイプの膨らむ大きさ
        "opacity":num, //膨らむシェイプの透明度（0 〜 1）
        "duration":num, //膨らむシェイプの持続時間(onclick時のみ)
        "speed":num //膨らむシェイプの速度(onclick時のみ)
      },
      //------------------
      //シェイプが増える----------
      "push":{
        "particles_nb":num //増えるシェイプの数
      },
      //------------------
      //シェイプが減る----------
      "remove":{
        "particles_nb":num //減るシェイプの数
      }
      //------------------
    }
  },
    "retina_detect":true, //Retina対応の有無
    "resize":true//canvasのサイズアジャストの有無
  }
  );*/