# 样式
## 默认样式
要是设置defaultNode 会给所有节点设置相同的样式
```ts
const graph = new Graph({
  container: 'graph',
    defaultNode: {
        size: 25, // 节点大小
        style: {
            fill: '#bdd2fd'  // 节点背景色
        },
        labelCfg: {  // 节点文字
            style: {
                fontSize: 12, // 节点文字 字体大小
                fill: '#fff' // 节点文字 字体颜色
            }
        }
    },
    defaultLink: {
        style: {
            stroke: '#333333', // 边的颜色
            lineWidth: 1      // 边的粗细
        },
        labelCfg: {
            style: {
                fontSize: 12,
                fill: '#000'
            },
            offset: {
                y: -8  // 文字偏移量
            }
        }
    },
});
```

## 给某个节点或者边设置不同的样式
设置颜色的节点或边会覆盖默认的样式

```ts

let data = {
    nodes: [
        {   
            id:'node1',
            name: '节点1',
            size: 50, // 节点大小
            style: { fill: 'red' }, 
            labelCfg: {
                style: {
                    fontSize: 12,
                    fill: '#000'
                },
                offset: {
                    y: -8
                }
            } },
        { id: 'node2', name: '节点2', style: { fill: 'red' } },
    ],
    links: [
        {source: 'node2', target: 'node1',style: {stroke: 'red'}}
    ]
}

graph.changeData(data)
```


## 样式配置属性
```ts

export interface IDefaultNodeCfg {
    size: number;
    style: IDefaultNodeStyle;
    labelCfg: ILabelCfg;
}

export interface IDefaultLinkCfg {
    style: IDefaultLinkStyle;
    labelCfg: ILabelCfg;
}

export interface IDefaultNodeStyle {
  fill: number | string;
  stroke?: number | string;
  lineWidth?: number;
  opacity?: number;
  fillOpacity?: number;
  cursor?: string;
}
export interface IDefaultLinkStyle {
    stroke: number | string;
    lineWidth: number;
    lineAppendWidth?: number; //边响应鼠标事件时的检测宽度，当 lineWidth 太小而不易选中时，可以通过该参数提升击中范围
    strokeOpacity?: number; // 边透明度
    lineDash?: number;
    cursor?: string;
}

export interface ILabelCfg {
  align?: 'center' | string; // 文字位置
  offset?: { x?: number; y?: number };
  style: {
    fill: number | string;
    fontSize: number;
    opacity?: number;
    lineWidth?: number;
  };
}

```