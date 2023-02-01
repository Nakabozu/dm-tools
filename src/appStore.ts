import { writable, type Writable } from 'svelte/store';

// TypeScript Helper objects
export enum ModuleMenuEnum {
    SelectModule = 0,
    Witchlight,
}

export const moduleMenuObjects = [
    {name: 'Menu', componentName: 'SelectModule', value: ModuleMenuEnum.SelectModule},
    {name: 'Wilds Beyond Witchlight', componentName: 'Witchlight', value: ModuleMenuEnum.Witchlight}
]

// State Management
export const page: Writable<number> = writable(1);
export const chapter: Writable<number> = writable(2);
export const topic: Writable<number> = writable(7);

// Module Selection Management
export const witchlightChaptersList = [
    {name:"Chapter Select", link:"/witchlight"},
    {name:"Chapter 1: Witchlight Carnival", link:"/witchlight/carnival"},
    {name:"Chapter 2: Hither", link:"/witchlight/hither"},
    {name:"Chapter 3: Thither", link:"/witchlight/thither"},
    {name:"Chapter 4: Yon", link:"/witchlight/yon"},
    {name:"Chapter 5: Palace of Heart's Desire", link:"/witchlight/palace"}
];

export const hitherTopicsList = [
    {name:"Chapter Select", link:"/witchlight/"},
    {name:"Hither Overview", link:"/witchlight/hither"},
    {name:"Slanty Tower", link:"/witchlight/hither/slanty"},
    {name:"Telemy Hill", link:"/witchlight/hither/telemy"},
    {name:"Brigands' Tollway", link:"/witchlight/hither/brigands"},
    {name:"Downfall", link:"/witchlight/hither/downfall"},
    {name:"Bavlorna's Cottage", link:"/witchlight/hither/cottage"},
    {name:"Owells", link:"/witchlight/hither/owell"}
];