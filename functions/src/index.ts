import * as functions from "firebase-functions";

exports.makeUppercase = functions.firestore.document("/messages/{documentId}")
  .onCreate((snap: functions.firestore.DocumentSnapshot,
    context: functions.EventContext) => {
    const original: string = snap?.data()?.original;
    console.log("Uppercasing", context.params.documentId, original);
    const uppercase: string = original.toUpperCase();
    return snap.ref.set({uppercase}, {merge: true});
  });

exports.registerLead =
functions.firestore.document("/demo-requests/{requestId}")
  .onCreate((snap: functions.firestore.DocumentSnapshot,
    context: functions.EventContext) => {
    const original: string = snap?.data()?.original;
    console.log("Logging Original: ");
    console.log(original);
  });
