import { Options } from "./quartz/components/ExplorerNode";

export const sortFn: Options["sortFn"] = (a, b) => {
    if ((!a.file && !b.file) || (a.file && b.file)) {
        return a.name.localeCompare(b.name);
    }
    return a.file && !b.file ? 1 : -1;
}