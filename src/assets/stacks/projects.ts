import { IProjectAssets } from '../../interface';

const prefix =
  'https://raw.githubusercontent.com/solebellsBEACH/showMeAssets/main/assets/stacks/projects/';

const afpesp_asset1 = `${prefix}/afpesp/asset_afpesp1.jpeg`;
const afpesp_asset2 = `${prefix}/afpesp/asset_afpesp2.jpeg`;
const afpesp_asset3 = `${prefix}/afpesp/asset_afpesp3.jpeg`;
const logo_afpesp = `${prefix}/afpesp/logo_afpesp.png`;

const ranking_asset1 = `${prefix}/ranking/asset_ranking1.png`;
const ranking_asset2 = `${prefix}/ranking/asset_ranking2.png`;
const ranking_asset3 = `${prefix}/ranking/asset_ranking3.png`;
const ranking_asset4 = `${prefix}/ranking/asset_ranking4.png`;
const logo_ranking = `${prefix}/ranking/logo_ranking.png`;

const logo_azo = `${prefix}/azo/logo_azo.png`;
const logo_prevent = `${prefix}/prevent/logo_prevent.png`;
const logo_kolping = `${prefix}/kolping/logo_kolping.png`;

export const projectAssets: IProjectAssets = {
  afpesp: {
    logo: logo_afpesp,
    assets: [afpesp_asset1, afpesp_asset2, afpesp_asset3],
  },
  ranking: {
    logo: logo_ranking,
    assets: [ranking_asset1, ranking_asset2, ranking_asset3, ranking_asset4],
  },
  azo: {
    logo: logo_azo,
    assets: [],
  },
  prevent: {
    logo: logo_prevent,
    assets: [],
  },
  kolping: {
    logo: logo_kolping,
    assets: [],
  },
};
