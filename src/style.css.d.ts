declare namespace StyleCssNamespace {
  export interface IStyleCss {
    bp: string;
    btn: string;
    c: string;
    c1: string;
    cd: string;
    cm: string;
    cp: string;
    cs: string;
    err: string;
    gd: string;
    ge: string;
    gh: string;
    gi: string;
    go: string;
    gp: string;
    gr: string;
    gs: string;
    gt: string;
    gu: string;
    highlight: string;
    il: string;
    k: string;
    kc: string;
    kd: string;
    kn: string;
    kp: string;
    kr: string;
    kt: string;
    kv: string;
    m: string;
    'main-content': string;
    mb: string;
    mf: string;
    mh: string;
    mi: string;
    mo: string;
    mx: string;
    na: string;
    nb: string;
    nc: string;
    nd: string;
    ne: string;
    nf: string;
    ni: string;
    nl: string;
    nn: string;
    no: string;
    nt: string;
    nv: string;
    o: string;
    ow: string;
    'page-header': string;
    'project-name': string;
    'project-tagline': string;
    s: string;
    s1: string;
    s2: string;
    sb: string;
    sc: string;
    sd: string;
    se: string;
    sh: string;
    si: string;
    'site-footer': string;
    'site-footer-credits': string;
    'site-footer-owner': string;
    sr: string;
    ss: string;
    sx: string;
    vc: string;
    vg: string;
    vi: string;
    w: string;
  }
}

declare const StyleCssModule: StyleCssNamespace.IStyleCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: StyleCssNamespace.IStyleCss;
};

export = StyleCssModule;
