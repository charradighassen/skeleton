import { IRoute } from '../types/index';

const guard = (route: IRoute): Boolean => !route.secure;

export default guard