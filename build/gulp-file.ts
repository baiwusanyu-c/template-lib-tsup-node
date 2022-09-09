import {series,src,dest,parallel} from "gulp";
import {run} from "./utils";
import fs  from "fs-extra";
import path from "path";
import {parallelTask} from "./rewirte-path";

const moveDistToRoot = async () =>{
    const distPathInBuild = path.resolve(process.cwd(),'dist')
    const distPathToRoot = path.resolve(process.cwd(),'../dist')
    await fs.copySync(distPathInBuild, distPathToRoot)
}
export default series(
    ...parallelTask(),
    // 移动dist
    async ()=> await moveDistToRoot(),
    // 删build目录下dist
    async ()=> await run('pnpm run --filter @template-node-tsup/build clean')
)