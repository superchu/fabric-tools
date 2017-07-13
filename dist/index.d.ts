export interface Doc {
    version: number;
    type: string;
    content: Node[];
}
export interface Node {
    type: string;
    content?: Node[];
}
export declare const filterContentByType: (doc: Doc, ...types: string[]) => Node[];
