import admin from 'firebase-admin';

export class ProdutosRepository {
    findProducts() {
        return  admin.firestore()
        .collection('produtos')
        
        .orderBy('value', 'desc')
        .get()
        .then(snapshot => {
            return snapshot.docs.map(doc => ({
                ...doc.data(),
                uid: doc.id
            }))
        });
    }

}