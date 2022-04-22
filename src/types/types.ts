export interface IForm
{
    position: [number, number, number]
    color: {r: number, g: number, b: number, a: number}
    size: number
}

export interface IProp
{
    image: string
    name: string
}

export interface INode {
    facing: { w: number, x: number, y: number, z: number }
    id: number
    image: string
    kind: string
    position: { x: number, y: number, z: number }
    properties: IProp[]
    shape: 'Ball' | 'Box' | 'Tetra' | 'Cylinder' | 'Diamond' | 'Hourglass' | 'Plus' | 'Star'
    size: number
    title: string
    tone: { r: number, g: number, b: number, a: number }
    uuid: string
}

export interface IMap {
    format: string
    links: []
    metaLinks: []
    metaNodes: []
    name: string
    nodes: INode[]
}
