<template>
    <div style="margin-bottom: 20px;display: flex;align-items: center">
        数据量:
        <select v-model="select" style="border: 1px solid #ccc;padding: 0 8px">
            <option>1000</option>
            <option>10000</option>
            <option>100000</option>
        </select>
        <button style="padding: 0 20px; border: 1px solid #ccc;margin-left: 20px" @click="clickHandler">更新数据</button>
    </div>
    <div id="big" style="height: 500px"></div>
</template>

<script lang="ts" setup>
import { onMounted,ref } from 'vue'
import { Graph } from 'pixi-graph-genji'
onMounted(() => {
    init()
})

let graph: Graph
let select = ref(1000)


const init = () => {
    graph = new Graph({
        container: 'big',
        fps: true,
        modes: {
            default: ['drag-node','drag-canvas', 'zoom-canvas']
        },
        zoom: {
            minZoom: 0.02,
            maxZoom: 2
        }
    })
    graph.on('createEdge:end', ({ startNode, endNode }) => {
        data.links.push({
            name: `${startNode.name}-${endNode.name}`,
            source: startNode.id,
            target: endNode.id
        });
        graph.changeData(data);
    });

    const data = generateNodesAndLinks(1000);
    graph.changeData(data);
}

const clickHandler = () => {
    const data = generateNodesAndLinks(select.value);
    graph.changeData(data);
}

function generateNodesAndLinks(numNodes) {
    const nodes = [];
    const links = [];

    // 生成节点数据
    for (let i = 0; i < numNodes; i++) {
        const id = `node${i}`;
        const name = `node${i}`;
        const size = Math.floor(Math.random() * 50) + 10;
        const style = { fill: getRandomColor() };
        nodes.push({ id, name, size, style });
    }

    // 生成边数据
    for (let i = 0; i < numNodes; i++) {
        const source = `node${i}`;
        const target = `node${(i + 1) % numNodes}`;
        const name = 'link';
        links.push({ source, target, name });
    }

    return { nodes, links };
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

</script>

<style scoped>

</style>