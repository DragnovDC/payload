import type { DefaultTranslationsObject, Language } from '../types.js'

export const huTranslations: DefaultTranslationsObject = {
  authentication: {
    account: 'Fiók',
    accountOfCurrentUser: 'Az aktuális felhasználó fiókja',
    accountVerified: 'A fiók sikeresen hitelesítve.',
    alreadyActivated: 'Már aktiválva van',
    alreadyLoggedIn: 'Már bejelentkezett',
    apiKey: 'API-kulcs',
    authenticated: 'Hitelesített',
    backToLogin: 'Vissza a bejelentkezéshez',
    beginCreateFirstUser: 'Kezdésként hozza létre az első felhasználót.',
    changePassword: 'Jelszó módosítása',
    checkYourEmailForPasswordReset:
      'Ellenőrizze az e-mailjét, a linkért, amellyel biztonságosan visszaállíthatja jelszavát.',
    confirmGeneration: 'Generálás megerősítése',
    confirmPassword: 'Jelszó megerősítése',
    createFirstUser: 'Első felhasználó létrehozása',
    emailNotValid: 'A megadott e-mail cím érvénytelen',
    emailOrUsername: 'E-mail vagy Felhasználónév',
    emailSent: 'E-mail elküldve',
    emailVerified: 'Az email sikeresen megerősítve.',
    enableAPIKey: 'API-kulcs engedélyezése',
    failedToUnlock: 'Nem sikerült feloldani',
    forceUnlock: 'Kényszerített feloldás',
    forgotPassword: 'Elfelejtett jelszó',
    forgotPasswordEmailInstructions:
      'Kérjük, adja meg e-mail címét alább. Kapni fog egy e-mail üzenetet a jelszó visszaállításához szükséges utasításokkal.',
    forgotPasswordQuestion: 'Elfelejtette jelszavát?',
    forgotPasswordUsernameInstructions:
      'Kérjük, adja meg felhasználónevét lentebb. A jelszó visszaállításáról szóló utasításokat a felhasználónevéhez tartozó e-mail címre küldjük.',
    generate: 'Generálás',
    generateNewAPIKey: 'Új API-kulcs generálása',
    generatingNewAPIKeyWillInvalidate:
      'Az új API-kulcs generálása <1>érvényteleníti</1> az előző kulcsot. Biztos, hogy folytatni szeretné?',
    lockUntil: 'Zárolás eddig',
    logBackIn: 'Jelentkezzen be újra',
    logOut: 'Kijelentkezés',
    loggedIn:
      'Ha egy másik felhasználóval szeretne bejelentkezni, először <0>ki kell jelentkeznie</0>.',
    loggedInChangePassword:
      'Jelszavának megváltoztatásához lépjen be <0>fiókjába</0>, és ott szerkessze jelszavát.',
    loggedOutInactivity: 'Inaktivitás miatt kijelentkeztünk.',
    loggedOutSuccessfully: 'Sikeresen kijelentkezett.',
    loggingOut: 'Kijelentkezés...',
    login: 'Bejelentkezés',
    loginAttempts: 'Bejelentkezési kísérletek',
    loginUser: 'Bejelentkezés felhasználó',
    loginWithAnotherUser:
      'Ha egy másik felhasználóval szeretne bejelentkezni, először <0>ki kell jelentkeznie</0>.',
    logout: 'Kijelentkezés',
    logoutSuccessful: 'Sikeres kijelentkezés.',
    logoutUser: 'Felhasználó kijelentkezése',
    newAPIKeyGenerated: 'Új API-kulcs generálva.',
    newAccountCreated:
      'Létrehoztunk egy új fiókot, amellyel hozzáférhet a következőhöz <a href="{{serverURL}}"> {{serverURL}} </a> Kérjük, kattintson a következő linkre, vagy illessze be az alábbi URL-t a böngészőbe az e-mail-cím ellenőrzéséhez : <a href="{{verificationURL}}"> {{verificationURL}} </a> <br> Az e-mail-cím ellenőrzése után sikeresen be tud majd jelentkezni.',
    newPassword: 'Új jelszó',
    passed: 'Hitelesítés sikeres',
    passwordResetSuccessfully: 'A jelszó sikeresen vissza lett állítva.',
    resetPassword: 'Jelszó visszaállítása',
    resetPasswordExpiration: 'Jelszóvisszaállítás lejárata',
    resetPasswordToken: 'Jelszóvisszaállító token',
    resetYourPassword: 'Jelszó visszaállítása',
    stayLoggedIn: 'Maradjon bejelentkezve',
    successfullyRegisteredFirstUser: 'Sikeresen regisztráltuk az első felhasználót.',
    successfullyUnlocked: 'Sikeresen feloldva',
    tokenRefreshSuccessful: 'A token frissítése sikeres.',
    unableToVerify: 'Sikertelen megerősítés',
    username: 'Felhasználónév',
    usernameNotValid: 'A megadott felhasználónév nem érvényes.',
    verified: 'Megerősítve',
    verifiedSuccessfully: 'Sikeresen megerősítve',
    verify: 'Megerősítés',
    verifyUser: 'Felhasználó megerősítése',
    verifyYourEmail: 'Erősítse meg az e-mail címét',
    youAreInactive:
      'Már egy ideje nem volt aktív, és hamarosan automatikusan kijelentkeztetjük saját biztonsága érdekében. Szeretne bejelentkezve maradni?',
    youAreReceivingResetPassword:
      'Ezt azért kapja, mert Ön (vagy valaki más) kérte fiókja jelszavának visszaállítását. A folyamat befejezéséhez kattintson a következő linkre, vagy illessze be böngészőjébe:',
    youDidNotRequestPassword:
      'Ha nem Ön kérte ezt, kérjük, hagyja figyelmen kívül ezt az e-mailt, és jelszava változatlan marad.',
  },
  error: {
    accountAlreadyActivated: 'Ez a fiók már aktiválva van.',
    autosaving: 'Hiba történt a dokumentum automatikus mentése közben.',
    correctInvalidFields: 'Kérjük, javítsa ki az érvénytelen mezőket.',
    deletingFile: 'Hiba történt a fájl törlésekor.',
    deletingTitle:
      'Hiba történt a {{title}} törlése közben. Kérjük, ellenőrizze a kapcsolatot, és próbálja meg újra.',
    emailOrPasswordIncorrect: 'A megadott e-mail-cím vagy jelszó helytelen.',
    followingFieldsInvalid_one: 'A következő mező érvénytelen:',
    followingFieldsInvalid_other: 'A következő mezők érvénytelenek:',
    incorrectCollection: 'Helytelen gyűjtemény',
    invalidFileType: 'Érvénytelen fájltípus',
    invalidFileTypeValue: 'Érvénytelen fájltípus: {{value}}',
    loadingDocument: 'Hiba történt a {{id}} azonosítójú dokumentum betöltésekor.',
    localesNotSaved_one: 'Az alábbi helyi beállítást nem sikerült menteni:',
    localesNotSaved_other: 'Az alábbi helyi beállításokat nem sikerült menteni:',
    logoutFailed: 'Kijelentkezés sikertelen.',
    missingEmail: 'Hiányzó e-mail.',
    missingIDOfDocument: 'Hiányzik a frissítendő dokumentum azonosítója.',
    missingIDOfVersion: 'A verzió azonosítója hiányzik.',
    missingRequiredData: 'Hiányoznak kötelező adatok.',
    noFilesUploaded: 'Nem került fájl feltöltésre.',
    noMatchedField: 'Nem található egyező mező a következőhöz: "{{label}}"',
    noUser: 'Nincs felhasználó',
    notAllowedToAccessPage: 'Ehhez az oldalhoz nem férhet hozzá.',
    notAllowedToPerformAction: 'Ezt a műveletet nem hajthatja végre.',
    notFound: 'A kért erőforrás nem található.',
    previewing: 'Hiba történt a dokumentum előnézetének megtekintése közben.',
    problemUploadingFile: 'Hiba történt a fájl feltöltése közben.',
    tokenInvalidOrExpired: 'A token érvénytelen vagy lejárt.',
    tokenNotProvided: 'Token nem biztosított.',
    unPublishingDocument: 'Hiba történt a dokumentum közzétételének visszavonása közben.',
    unableToDeleteCount: 'Nem sikerült törölni {{count}}/{{total}} {{label}}.',
    unableToUpdateCount: 'Nem sikerült frissíteni {{count}}/{{total}} {{label}}.',
    unauthorized: 'Jogosulatlan, a kéréshez be kell jelentkeznie.',
    unknown: 'Ismeretlen hiba történt.',
    unspecific: 'Hiba történt.',
    userEmailAlreadyRegistered: 'A megadott email címmel már regisztráltak egy felhasználót.',
    userLocked: 'Ez a felhasználó túl sok sikertelen bejelentkezési kísérlet miatt zárolva van.',
    usernameAlreadyRegistered: 'Egy felhasználó a megadott felhasználónévvel már regisztrált.',
    usernameOrPasswordIncorrect: 'A megadott felhasználónév vagy jelszó helytelen.',
    valueMustBeUnique: 'Az értéknek egyedinek kell lennie',
    verificationTokenInvalid: 'Az ellenőrző token érvénytelen.',
  },
  fields: {
    addLabel: '{{label}} hozzáadása',
    addLink: 'Link hozzáadása',
    addNew: 'Új hozzáadása',
    addNewLabel: 'Új {{label}} hozzáadása',
    addRelationship: 'Kapcsolat hozzáadása',
    addUpload: 'Feltöltés hozzáadása',
    block: 'blokk',
    blockType: 'Blokk típusa',
    blocks: 'blokkok',
    chooseBetweenCustomTextOrDocument:
      'Válasszon egy egyéni szöveges URL-cím megadása vagy egy másik dokumentumra való hivatkozás között.',
    chooseDocumentToLink: 'Válassza ki a dokumentumot, amelyre hivatkozni kíván',
    chooseFromExisting: 'Válasszon a meglévők közül',
    chooseLabel: 'Válassza ki a {{label}}',
    collapseAll: 'Mindet összecsuk',
    customURL: 'Egyéni URL',
    editLabelData: '{{label}} adatok szerkesztése',
    editLink: 'Link szerkesztése',
    editRelationship: 'Kapcsolat hozzáadása',
    enterURL: 'Adjon meg egy URL-t',
    internalLink: 'Belső link',
    itemsAndMore: '{{items}} és további {{count}}',
    labelRelationship: '{{label}} Kapcsolat',
    latitude: 'Szélesség',
    linkType: 'Link típusa',
    linkedTo: 'Kapcsolódik a <0>{{label}}</0>',
    longitude: 'Hosszúság',
    newLabel: 'Új {{label}}',
    openInNewTab: 'Megnyitás új lapon',
    passwordsDoNotMatch: 'A jelszavak nem egyeznek.',
    relatedDocument: 'Kapcsolódó dokumentum',
    relationTo: 'Kapcsolat a következővel:',
    removeRelationship: 'Kapcsolat eltávolítása',
    removeUpload: 'Feltöltés eltávolítása',
    saveChanges: 'Módosítások mentése',
    searchForBlock: 'Blokk keresése',
    selectExistingLabel: 'Meglévő {{label}} kiválasztása',
    selectFieldsToEdit: 'Válassza ki a szerkeszteni kívánt mezőket',
    showAll: 'Az összes megjelenítése',
    swapRelationship: 'Kapcsolat csere',
    swapUpload: 'Feltöltés csere',
    textToDisplay: 'Megjelenítendő szöveg',
    toggleBlock: 'Blokk kinyitása',
    uploadNewLabel: 'Új {{label}} feltöltése',
  },
  general: {
    aboutToDelete: 'A {{label}} <1>{{title}}</1> törlésére készül. Biztos benne?',
    aboutToDeleteCount_many: 'Törölni készül {{count}} {{label}}',
    aboutToDeleteCount_one: 'Törölni készül {{count}} {{label}}',
    aboutToDeleteCount_other: 'Törölni készül {{count}} {{label}}',
    addBelow: 'Hozzáadás lent',
    addFilter: 'Szűrő hozzáadása',
    adminTheme: 'Admin téma',
    and: 'És',
    applyChanges: 'Változtatások alkalmazása',
    ascending: 'Növekvő',
    automatic: 'Automatikus',
    backToDashboard: 'Vissza az irányítópultra',
    cancel: 'Mégsem',
    changesNotSaved:
      'A módosítások nem lettek mentve. Ha most távozik, elveszíti a változtatásokat.',
    clearAll: undefined,
    close: 'Bezárás',
    collapse: 'Összecsukás',
    collections: 'Gyűjtemények',
    columnToSort: 'Rendezendő oszlop',
    columns: 'Oszlopok',
    confirm: 'Megerősítés',
    confirmDeletion: 'Törlés megerősítése',
    confirmDuplication: 'Duplikáció megerősítése',
    copied: 'Másolva',
    copy: 'Másolás',
    create: 'Létrehozás',
    createNew: 'Új létrehozása',
    createNewLabel: 'Új {{label}} létrehozása',
    created: 'Létrehozva',
    createdAt: 'Létrehozva:',
    creating: 'Létrehozás',
    creatingNewLabel: 'Új {{label}} létrehozása',
    custom: 'Egyéni',
    dark: 'Sötét',
    dashboard: 'Irányítópult',
    delete: 'Törlés',
    deletedCountSuccessfully: '{{count}} {{label}} sikeresen törölve.',
    deletedSuccessfully: 'Sikeresen törölve.',
    deleting: 'Törlés...',
    depth: 'Mélység',
    descending: 'Csökkenő',
    deselectAllRows: 'Jelölje ki az összes sort',
    document: 'Dokumentum',
    documentLocked: 'A dokumentum zárolva van',
    documents: 'Dokumentumok',
    duplicate: 'Duplikálás',
    duplicateWithoutSaving: 'Duplikálás a módosítások mentése nélkül',
    edit: 'Szerkesztés',
    editLabel: '{{label}} szerkesztése',
    editing: 'Szerkesztés',
    editingLabel_many: '{{count}} {{label}} szerkesztése',
    editingLabel_one: '{{count}} {{label}} szerkesztése',
    editingLabel_other: '{{count}} {{label}} szerkesztése',
    email: 'E-mail',
    emailAddress: 'E-mail cím',
    enterAValue: 'Adjon meg egy értéket',
    error: 'Hiba',
    errors: 'Hibák',
    fallbackToDefaultLocale: 'Visszatérés az alapértelmezett nyelvhez',
    false: 'Hamis',
    filter: 'Szűrő',
    filterWhere: 'Szűrő {{label}} ahol',
    filters: 'Szűrők',
    globals: 'Globálisok',
    goBack: 'Vissza',
    language: 'Nyelv',
    lastModified: 'Utoljára módosítva',
    leaveAnyway: 'Távozás mindenképp',
    leaveWithoutSaving: 'Távozás mentés nélkül',
    light: 'Világos',
    livePreview: 'Előnézet',
    loading: 'Betöltés',
    locale: 'Nyelv',
    locales: 'Nyelvek',
    menu: 'Menü',
    moveDown: 'Mozgatás lefelé',
    moveUp: 'Mozgatás felfelé',
    newPassword: 'Új jelszó',
    next: 'Következő',
    noFiltersSet: 'Nincs beállítva szűrő',
    noLabel: '<No {{label}}>',
    noOptions: 'Nincs lehetőség',
    noResults:
      'Nem találtunk {{label}}. Vagy még nem létezik {{label}}, vagy egyik sem felel meg a fent megadott szűrőknek.',
    noValue: 'Nincs érték',
    none: 'Semmi',
    notFound: 'Nem található',
    nothingFound: 'Nincs találat',
    of: 'a',
    open: 'Megnyitás',
    or: 'Vagy',
    order: 'Sorrend',
    pageNotFound: 'Az oldal nem található',
    password: 'Jelszó',
    payloadSettings: 'Payload beállítások',
    perPage: 'Oldalanként: {{limit}}',
    previous: 'Előző',
    remove: 'Törlés',
    reset: 'Visszaállítás',
    row: 'Sor',
    rows: 'Sorok',
    save: 'Mentés',
    saving: 'Mentés...',
    searchBy: 'Keresés a következő szerint: {{label}}',
    selectAll: 'Az összes kijelölése: {{count}} {{label}}',
    selectAllRows: 'Válassza ki az összes sort',
    selectValue: 'Válasszon ki egy értéket',
    selectedCount: '{{count}} {{label}} kiválasztva',
    showAllLabel: 'Mutasd az összes {{címke}}',
    sorryNotFound: 'Sajnáljuk – nincs semmi, ami megfelelne a kérésének.',
    sort: 'Rendezés',
    sortByLabelDirection: 'Rendezés {{label}} {{direction}} szerint',
    stayOnThisPage: 'Maradjon ezen az oldalon',
    submissionSuccessful: 'Beküldés sikeres.',
    submit: 'Beküldés',
    submitting: 'Beküldés...',
    success: 'Siker',
    successfullyCreated: '{{label}} sikeresen létrehozva.',
    successfullyDuplicated: '{{label}} sikeresen duplikálódott.',
    takeOver: 'Átvétel',
    thisLanguage: 'Magyar',
    titleDeleted: '{{label}} "{{title}}" sikeresen törölve.',
    true: 'Igaz',
    unauthorized: 'Jogosulatlan',
    unsavedChangesDuplicate: 'Nem mentett módosításai vannak. Szeretné folytatni a duplikációt?',
    untitled: 'Névtelen',
    updatedAt: 'Frissítve:',
    updatedCountSuccessfully: '{{count}} {{label}} sikeresen frissítve.',
    updatedSuccessfully: 'Sikeresen frissítve.',
    updating: 'Frissítés',
    uploading: 'Feltöltés',
    user: 'Felhasználó',
    username: 'Felhasználónév',
    users: 'Felhasználók',
    value: 'Érték',
    viewReadOnly: 'Csak olvasható nézet',
    welcome: 'Üdvözöljük',
  },
  operators: {
    contains: 'tartalmaz',
    equals: 'egyenlő',
    exists: 'létezik',
    intersects: 'metszéspontokban',
    isGreaterThan: 'nagyobb, mint',
    isGreaterThanOrEqualTo: 'nagyobb vagy egyenlő, mint',
    isIn: 'benne van',
    isLessThan: 'kisebb, mint',
    isLessThanOrEqualTo: 'kisebb vagy egyenlő, mint',
    isLike: 'olyan, mint',
    isNotEqualTo: 'nem egyenlő',
    isNotIn: 'nincs benne',
    near: 'közel',
    within: 'belül',
  },
  upload: {
    addFile: 'Fájl hozzáadása',
    addFiles: 'Fájlok hozzáadása',
    bulkUpload: 'Tömeges feltöltés',
    crop: 'Termés',
    cropToolDescription:
      'Húzza a kijelölt terület sarkait, rajzoljon új területet, vagy igazítsa a lentebb található értékeket.',
    dragAndDrop: 'Húzzon ide egy fájlt',
    dragAndDropHere: 'vagy húzzon ide egy fájlt',
    editImage: 'Kép szerkesztése',
    fileName: 'Fájlnév',
    fileSize: 'Fájl mérete',
    fileToUpload: 'Feltöltendő fájl',
    filesToUpload: 'Feltöltendő fájlok',
    focalPoint: 'Fókuszpont',
    focalPointDescription:
      'Húzza az érdekes pontot közvetlenül az előnézetre, vagy állítsa be az alábbi értékeket.',
    height: 'Magasság',
    lessInfo: 'Kevesebb információ',
    moreInfo: 'További információ',
    pasteURL: 'URL beillesztése',
    previewSizes: 'Előnézeti méretek',
    selectCollectionToBrowse: 'Válassza ki a böngészni kívánt gyűjteményt',
    selectFile: 'Válasszon ki egy fájlt',
    setCropArea: 'Állítsa be a vágási területet',
    setFocalPoint: 'Állítsa be a fókuszpontot',
    sizes: 'Méretek',
    sizesFor: 'Méretek a {{címke}} számára',
    width: 'Szélesség',
  },
  validation: {
    emailAddress: 'Kérjük, adjon meg egy érvényes e-mail címet.',
    enterNumber: 'Kérjük, adjon meg egy érvényes számot.',
    fieldHasNo: 'Ennek a mezőnek nincs {{label}}',
    greaterThanMax: '{{value}} nagyobb, mint a megengedett maximum {{label}} érték, ami {{max}}.',
    invalidInput: 'Ez a mező érvénytelen értéket tartalmaz.',
    invalidSelection: 'Ez a mező érvénytelen kijelöléssel rendelkezik.',
    invalidSelections: 'Ez a mező a következő érvénytelen kijelöléseket tartalmazza:',
    lessThanMin: '{{value}} kisebb, mint a megengedett minimum {{label}} érték, ami {{min}}.',
    limitReached: 'Elérte a korlátot, csak {{max}} elem adható hozzá.',
    longerThanMin:
      'Ennek az értéknek hosszabbnak kell lennie, mint a minimális {{minLength}} karakter hosszúság.',
    notValidDate: '" {{value}} " nem érvényes dátum.',
    required: 'Ez a mező kötelező.',
    requiresAtLeast: 'Ehhez a mezőhöz legalább {{count}} {{label}} szükséges.',
    requiresNoMoreThan: 'Ehhez a mezőhöz legfeljebb {{count}} {{label}} szükséges.',
    requiresTwoNumbers: 'Ehhez a mezőhöz két szám szükséges.',
    shorterThanMax:
      'Ennek az értéknek rövidebbnek kell lennie, mint a maximálisan megengedett {{maxLength}} karakter.',
    trueOrFalse: 'Ez a mező csak igaz vagy hamis lehet.',
    username:
      'Adjon meg egy érvényes felhasználónevet. Tartalmazhat betűket, számokat, kötőjeleket, pontokat és aláhúzásokat.',
    validUploadID: 'Ez a mező nem érvényes feltöltési azonosító.',
  },
  version: {
    type: 'Típus',
    aboutToPublishSelection:
      'Arra készül, hogy az összes {{label}} elemet közzétegye a kijelölésben. biztos vagy ebben?',
    aboutToRestore:
      'Arra készül, hogy visszaállítsa ezt a {{label}} dokumentumot arra az állapotra, amelyben {{versionDate}}  napon volt.',
    aboutToRestoreGlobal:
      'Arra készül, hogy visszaállítsa a {{label}} arra az állapotra, amelyben {{versionDate}} napon volt.',
    aboutToRevertToPublished:
      'Arra készül, hogy visszaállítsa a dokumentum módosításait a közzétett állapotába. Biztos benne?',
    aboutToUnpublish: 'A dokumentum közzétételének visszavonására készül. Biztos benne?',
    aboutToUnpublishSelection:
      'Arra készül, hogy visszavonja a kijelölésben szereplő összes {{label}} közzétételét. biztos vagy ebben?',
    autosave: 'Automatikus mentés',
    autosavedSuccessfully: 'Automatikus mentés sikeres.',
    autosavedVersion: 'Automatikusan mentett verzió',
    changed: 'Megváltozott',
    compareVersion: 'Hasonlítsa össze a verziót a következőkkel:',
    confirmPublish: 'A közzététel megerősítése',
    confirmRevertToSaved: 'Erősítse meg a mentett verzióra való visszatérést',
    confirmUnpublish: 'A közzététel visszavonásának megerősítése',
    confirmVersionRestoration: 'Verzió-visszaállítás megerősítése',
    currentDocumentStatus: 'Jelenlegi {{docStatus}} dokumentum',
    currentDraft: 'Aktuális tervezet',
    currentPublishedVersion: 'Jelenleg Közzétett Verzió',
    draft: 'Piszkozat',
    draftSavedSuccessfully: 'A piszkozat sikeresen mentve.',
    lastSavedAgo: 'Utoljára mentve {{distance}} órája',
    noFurtherVersionsFound: 'További verziók nem találhatók',
    noRowsFound: 'Nem található {{label}}',
    noRowsSelected: undefined,
    preview: 'Előnézet',
    previouslyPublished: 'Korábban Közzétéve',
    problemRestoringVersion: 'Hiba történt a verzió visszaállításakor',
    publish: 'Közzététel',
    publishChanges: 'Módosítások közzététele',
    published: 'Közzétett',
    publishing: 'Közzététel',
    restoreAsDraft: 'Visszaállítás piszkozatként',
    restoreThisVersion: 'A verzió visszaállítása',
    restoredSuccessfully: 'Sikeresen visszaállítva.',
    restoring: 'Visszaállítás...',
    revertToPublished: 'Visszatérés a közzétetthez',
    reverting: 'Visszaállítás...',
    saveDraft: 'Piszkozat mentése',
    selectLocales: 'Megjelenítendő nyelvek kiválasztása',
    selectVersionToCompare: 'Válassza ki az összehasonlítani kívánt verziót',
    showLocales: 'Nyelvek megjelenítése:',
    showingVersionsFor: 'Verziók megjelenítése a következőkhöz:',
    status: 'Állapot',
    unpublish: 'Közzététel visszavonása',
    unpublishing: 'Közzététel visszavonása...',
    version: 'Verzió',
    versionCount_many: '{{count}} verzió található',
    versionCount_none: 'Nem található verzió',
    versionCount_one: '{{count}} verzió található',
    versionCount_other: '{{count}} verzió található',
    versionCreatedOn: '{{version}} létrehozva:',
    versionID: 'Verzióazonosító',
    versions: 'Verziók',
    viewingVersion: 'A(z) {{entityLabel}} {{documentTitle}} verziójának megtekintése',
    viewingVersionGlobal: 'A globális {{entityLabel}} verziójának megtekintése',
    viewingVersions: 'A {{entityLabel}} {{documentTitle}} verzióinak megtekintése',
    viewingVersionsGlobal: 'A globális {{entityLabel}} verzióinak megtekintése',
  },
}

export const hu: Language = {
  dateFNSKey: 'hu',
  translations: huTranslations,
}
