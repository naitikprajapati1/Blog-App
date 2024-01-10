// configuration appwrite env variables in str
const config = {
    appWriteUrl: String(import.meta.VITE_APP_APPWRITE_URL),
    appWriteProjectId: String(import.meta.VITE_APPWRITE_PROOJECT_ID),
    appWriteDatabaseId: String(import.meta.VITE_APPWRITE_DATABASE_ID),
    appWriteCollectionId: String(import.meta.VITE_APPWRITE_COLLECTION_I),
    appWriteBucketId: String(import.meta.VITE_APPWRITE_BUKCET_ID)
};


export default config; 
