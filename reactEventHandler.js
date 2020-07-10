// 2020.7/09, am 10:20 - 10:45 & pm 16:40 - 17:40
// register HTML5 API: Drag & Drop thru onDrag* | onDrop
// 註冊 H5 的『拖曳功能』事件處理器

//元件層級: 


var React = require('react');
//var ReactDom = require('react-dom'); we use React.DOM instead of react-dom
var ReactDOM = require('react-dom')

var QueryEditor = React.createClass({

    render(

        return

            <div className = 'query-editor'> //祖元件
   
                <div className = 'row' > //父元件
   
                    <aside className = 'col'> //子元件
   
   
                    </aside>
   
                    <div className = 'canvas'> //孫元件
   
                        // React className 等同於 H5 的 class
                        <div className = 'dropzone' // 示範定義如最下方內文從 Line 60 開始
   
                            onDragOver = {this.dragHandler}
                            onDragEnter = {this.deHandler}
                            onDragLeave = {this.dlHandler}
                            onDrop = {this.dropHandler}
                           
                        >
   
                            <label className= 'dropzone'>  {this.state.c} </label>
   
                        </div>
                    </div>
                 </div>
            </div>      
    );
    
});

// 使用工廠讓元件物件有製造元素實體的機會
ReactDOM.DropZone({
    //h5 物件的參數可指定 react 類別的屬性和方法
    //React 的 className 等同於 H5 的 class
    className: 'dropzone',
    onDragOver: this.dragHandler,
    onDragEnter: this.deHandler,
    onDragLeave: this.dlHandler,
    onDrop: this.dropHandler,
    "Hi Kate is Back."// this.state.c // 要考慮是否要在此順便宣告定義共同屬性的 a 和 b

});

// 建立類別即元件物件
// 如不初始化狀態物件，則預設為 null
var DropZone = React.createClass({

    //類別或稱元件之物件內，宣告定義共同變數提供調用的方法存取即此類別的屬性
    getInitialState: function() {
        return {};
            //上面空物件其實有內容（等下寫）, 假設有 a: bool 預設為 false, b: int, c: string
        
    },

    dragHandler: function(){
        this.setState( // {a: true}
            );
    },

    deHandler: function(b){
        //可以追加 if 邏輯閘例如 if(a != undefined)
        this.setSate(
            // {b * 100}
        )

    },

    dlHandler: function(){
        this.state.c // 利用this.state.child 存取共用屬性的值
    },

    dropHandler: function(){

        // 倘若使用 replaceState 會讓整個元件屬性被改寫，就是說
        // 本來屬性物件可能有三項參數可存取
        // 如改成  this.replaceSate(
            // {a: false}
        //);
        // 則屬性物件會變成只有一項！這非複製元件 而是整個改寫元件了
        // 非常危險，請小心使用
        this.setSate(
            // {a: false}
        );

    }

});




