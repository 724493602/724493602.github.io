# 模式和行为
## 内置行为

| 行为名称       | 说明 |
|------------| ----|
| drag-node  | 节点拖动 |
| drag-canvas | 移动画布 |
| zoom-canvas | 缩放画布 |
| create-edge | 创建边 |

## 模式
#### 什么是 Mode
用户在交互一张图时，可能由于意图不同而存在不同的交互模式，例如在编辑模式下点击节点需要弹出窗口让用户编辑，在查看模式下点击节点需要选中节点。

#### 配置 Mode
默认会使用default模式下配置的行为，这时候可以拖拽画布和缩放画布
```ts{4-7}
 import { Graph } from 'pixi-graph-genji'
 const graph = new Graph({
    container: 'container',
     modes: {
         default: ['drag-canvas', 'zoom-canvas'],
         edit: ['drag-node', 'create-edge','drag-canvas', 'zoom-canvas']
     }
 });
```

#### 切换Mode
切换为edit模式，这时候可以拖拽画布，缩放画布,拖动节点和创建边
```ts
graph.setMode('edit');
```