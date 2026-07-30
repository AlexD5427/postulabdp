export type Locale='es'|'en'|'ay'|'qu';
export type L10n=Record<Locale,string>;
export type Opening={id:string,title:L10n,area:L10n,city:L10n,mode:L10n,deadline:string,featured?:boolean,accent:number};
export type Candidate={name:string,email:string,phone:string,city:string,role:string,cvName?:string,consent:boolean};
export type Preference={largeText:boolean,contrast:boolean,daltonism:boolean,reducedMotion:boolean,tts:boolean};
