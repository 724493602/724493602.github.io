# 快速上手
## 安装引用
### 1. 在项目中使用 NPM 包引入
```shell
npm install pixi-graph-genji --save
```
### 2. 在需要用的 JS 文件中导入：
```ts
import { Graph } from 'pixi-graph-genji';
```

## 快速使用
### 1. 创建容器
需要在 HTML 中创建一个用于容纳 graph 绘制的图的容器，通常为 div  标签。graph 在绘制时会在该容器下追加 canvas 标签，然后将图绘制在其中。canvas标签会取容器的宽高作为它的宽高.
```html
<div id="container" style="width: 100vh;height: 100vh"></div>
```
### 2. 实例化容器
在container属性中填写容器的id
```ts
 import { Graph } from 'pixi-graph-genji'
 new Graph({
    container: 'container',
 });
```

### 3. 准备数据
```ts
const data = {
  nodes: [
    {
      id: 'node1', // String，该节点存在则必须，节点的唯一标识
    },
    {
      id: 'node2', 
      fx: 100, // 固定X坐标, 没填就自动计算
      fy:100
    },
  ],
  links: [
    {
      source: 'node1',
      target: 'node2',
    },
  ],
};
```

### 4.渲染

```ts
 import { Graph } from 'pixi-graph-genji'
 const graph = new Graph({
    container: 'container',
 });
graph.changeData(data)
```