function updateKD(noKD)
{
getAndStoreDocumentSoalKD('theory','Document',noKD,1);
getAndStoreDocumentSoalKD('theory','Soal',noKD,1);
getAndStoreDocumentSoalKD('theory','Document',noKD,2);
getAndStoreDocumentSoalKD('theory','Soal',noKD,2);
getAndStoreDocumentSoalKD('theory','Document',noKD,3);
getAndStoreDocumentSoalKD('theory','Soal',noKD,3);
getAndStoreDocumentSoalKD('theory','Document',noKD,4);
getAndStoreDocumentSoalKD('theory','Soal',noKD,4);

getAndStoreDocumentSoalKD('listening','Document',noKD,1);
getAndStoreDocumentSoalKD('listening','Soal',noKD,1);
getAndStoreDocumentSoalKD('listening','Document',noKD,2);
getAndStoreDocumentSoalKD('listening','Soal',noKD,2);
getAndStoreDocumentSoalKD('listening','Document',noKD,3);
getAndStoreDocumentSoalKD('listening','Soal',noKD,3);
getAndStoreDocumentSoalKD('listening','Document',noKD,4);
getAndStoreDocumentSoalKD('listening','Soal',noKD,4);	
	
getAndStoreDocumentSoalSpeakingWritingKD('speaking',noKD,1);		
getAndStoreDocumentSoalSpeakingWritingKD('speaking',noKD,2);
getAndStoreDocumentSoalSpeakingWritingKD('speaking',noKD,3);	
getAndStoreDocumentSoalSpeakingWritingKD('speaking',noKD,4);	
getAndStoreDocumentSoalSpeakingWritingKD('speaking',noKD,5);		
getAndStoreDocumentSoalSpeakingWritingKD('speaking',noKD,6);	
getAndStoreDocumentSoalSpeakingWritingKD('speaking',noKD,7);		
getAndStoreDocumentSoalSpeakingWritingKD('speaking',noKD,8);	
getAndStoreDocumentSoalSpeakingWritingKD('speaking',noKD,9);		
getAndStoreDocumentSoalSpeakingWritingKD('speaking',noKD,10);	

getAndStoreDocumentSoalKD('reading','Document',noKD,1);
getAndStoreDocumentSoalKD('reading','Soal',noKD,1);
getAndStoreDocumentSoalKD('reading','Document',noKD,2);
getAndStoreDocumentSoalKD('reading','Soal',noKD,2);
getAndStoreDocumentSoalKD('reading','Document',noKD,3);
getAndStoreDocumentSoalKD('reading','Soal',noKD,3);
getAndStoreDocumentSoalKD('reading','Document',noKD,4);
getAndStoreDocumentSoalKD('reading','Soal',noKD,4);
	
getAndStoreDocumentSoalSpeakingWritingKD('writing',noKD,1);		
getAndStoreDocumentSoalSpeakingWritingKD('writing',noKD,2);
getAndStoreDocumentSoalSpeakingWritingKD('writing',noKD,3);	
getAndStoreDocumentSoalSpeakingWritingKD('writing',noKD,4);	
getAndStoreDocumentSoalSpeakingWritingKD('writing',noKD,5);		
getAndStoreDocumentSoalSpeakingWritingKD('writing',noKD,6);	
getAndStoreDocumentSoalSpeakingWritingKD('writing',noKD,7);		
getAndStoreDocumentSoalSpeakingWritingKD('writing',noKD,8);	
getAndStoreDocumentSoalSpeakingWritingKD('writing',noKD,9);		
getAndStoreDocumentSoalSpeakingWritingKD('writing',noKD,10);	

}

function storeKD(noKD,
tD1,tS1,tD2,tS2,tD3,tS3,tD4,tS4,
lD1,lS1,lD2,lS2,lD3,lS3,lD4,lS4,
sD1,sS1,sD2,sS2,sD3,sS3,sD4,sS4,
sD1,rS1,rD2,rS2,rD3,rS3,rD4,rS4,
sD1,wS1,wD2,wS2,wD3,wS3,wD4,wS4
)
{
var theoryDocumentKDDefaultId_1="theory"+"DocumentKD"+noKD+"_1";
var theorySoalKDDefaultId_1="theory"+"SoalKD"+noKD+"_1";
var theoryDocumentKDDefaultId_2="theory"+"DocumentKD"+noKD+"_2";
var theorySoalKDDefaultId_2="theory"+"SoalKD"+noKD+"_2";
var theoryDocumentKDDefaultId_3="theory"+"DocumentKD"+noKD+"_3";
var theorySoalKDDefaultId_3="theory"+"SoalKD"+noKD+"_3";
var theoryDocumentKDDefaultId_4="theory"+"DocumentKD"+noKD+"_4";
var theorySoalKDDefaultId_4="theory"+"SoalKD"+noKD+"_4";
var listeningDocumentKDDefaultId_1="listening"+"DocumentKD"+noKD+"_1";
var listeningSoalKDDefaultId_1="listening"+"SoalKD"+noKD+"_1";
var listeningDocumentKDDefaultId_2="listening"+"DocumentKD"+noKD+"_2";
var listeningSoalKDDefaultId_2="listening"+"SoalKD"+noKD+"_2";
var listeningDocumentKDDefaultId_3="listening"+"DocumentKD"+noKD+"_3";
var listeningSoalKDDefaultId_3="listening"+"SoalKD"+noKD+"_3";
var listeningDocumentKDDefaultId_4="listening"+"DocumentKD"+noKD+"_4";
var listeningSoalKDDefaultId_4="listening"+"SoalKD"+noKD+"_4";
var speakingDocumentKDDefaultId_1="speaking"+"DocumentKD"+noKD+"_1";
var speakingSoalKDDefaultId_1="speaking"+"SoalKD"+noKD+"_1";
var speakingDocumentKDDefaultId_2="speaking"+"DocumentKD"+noKD+"_2";
var speakingSoalKDDefaultId_2="speaking"+"SoalKD"+noKD+"_2";
var speakingDocumentKDDefaultId_3="speaking"+"DocumentKD"+noKD+"_3";
var speakingSoalKDDefaultId_3="speaking"+"SoalKD"+noKD+"_3";
var speakingDocumentKDDefaultId_4="speaking"+"DocumentKD"+noKD+"_4";
var speakingSoalKDDefaultId_4="speaking"+"SoalKD"+noKD+"_4";
var readingDocumentKDDefaultId_1="reading"+"DocumentKD"+noKD+"_1";
var readingSoalKDDefaultId_1="reading"+"SoalKD"+noKD+"_1";
var readingDocumentKDDefaultId_2="reading"+"DocumentKD"+noKD+"_2";
var readingSoalKDDefaultId_2="reading"+"SoalKD"+noKD+"_2";
var readingDocumentKDDefaultId_3="reading"+"DocumentKD"+noKD+"_3";
var readingSoalKDDefaultId_3="reading"+"SoalKD"+noKD+"_3";
var readingDocumentKDDefaultId_4="reading"+"DocumentKD"+noKD+"_4";
var readingSoalKDDefaultId_4="reading"+"SoalKD"+noKD+"_4";
var writingDocumentKDDefaultId_1="writing"+"DocumentKD"+noKD+"_1";
var writingSoalKDDefaultId_1="writing"+"SoalKD"+noKD+"_1";
var writingDocumentKDDefaultId_2="writing"+"DocumentKD"+noKD+"_2";
var writingSoalKDDefaultId_2="writing"+"SoalKD"+noKD+"_2";
var writingDocumentKDDefaultId_3="writing"+"DocumentKD"+noKD+"_3";
var writingSoalKDDefaultId_3="writing"+"SoalKD"+noKD+"_3";
var writingDocumentKDDefaultId_4="writing"+"DocumentKD"+noKD+"_4";
var writingSoalKDDefaultId_4="writing"+"SoalKD"+noKD+"_4";

stringifyItem(theoryDocumentKDDefaultId_1,tD1);
stringifyItem(theorySoalKDDefaultId_1,tS1);
stringifyItem(theoryDocumentKDDefaultId_2,tD2);
stringifyItem(theorySoalKDDefaultId_2,tS2);
stringifyItem(theoryDocumentKDDefaultId_3,tD3);
stringifyItem(theorySoalKDDefaultId_3,tS3);
stringifyItem(theoryDocumentKDDefaultId_4,tD4);
stringifyItem(theorySoalKDDefaultId_4,tS4);
stringifyItem(listeningDocumentKDDefaultId_1,tD1);
stringifyItem(listeningSoalKDDefaultId_1,tS1);
stringifyItem(listeningDocumentKDDefaultId_2,tD2);
stringifyItem(listeningSoalKDDefaultId_2,tS2);
stringifyItem(listeningDocumentKDDefaultId_3,tD3);
stringifyItem(listeningSoalKDDefaultId_3,tS3);
stringifyItem(listeningDocumentKDDefaultId_4,tD4);
stringifyItem(listeningSoalKDDefaultId_4,tS4);
stringifyItem(speakingDocumentKDDefaultId_1,sD1);
stringifyItem(speakingSoalKDDefaultId_1,sS1);
stringifyItem(speakingDocumentKDDefaultId_2,sD2);
stringifyItem(speakingSoalKDDefaultId_2,sS2);
stringifyItem(speakingDocumentKDDefaultId_3,sD3);
stringifyItem(speakingSoalKDDefaultId_3,sS3);
stringifyItem(speakingDocumentKDDefaultId_4,sD4);
stringifyItem(speakingSoalKDDefaultId_4,sS4);
stringifyItem(readingDocumentKDDefaultId_1,rD1);
stringifyItem(readingSoalKDDefaultId_1,rS1);
stringifyItem(readingDocumentKDDefaultId_2,rD2);
stringifyItem(readingSoalKDDefaultId_2,rS2);
stringifyItem(readingDocumentKDDefaultId_3,rD3);
stringifyItem(readingSoalKDDefaultId_3,rS3);
stringifyItem(readingDocumentKDDefaultId_4,rD4);
stringifyItem(readingSoalKDDefaultId_4,rS4);
stringifyItem(writingDocumentKDDefaultId_1,wD1);
stringifyItem(writingSoalKDDefaultId_1,wS1);
stringifyItem(writingDocumentKDDefaultId_2,wD2);
stringifyItem(writingSoalKDDefaultId_2,wS2);
stringifyItem(writingDocumentKDDefaultId_3,wD3);
stringifyItem(writingSoalKDDefaultId_3,wS3);
stringifyItem(writingDocumentKDDefaultId_4,wD4);
stringifyItem(writingSoalKDDefaultId_4,wS4);
}
function storeKD27JSON(){
	stringifyItem('theoryDocument'+'KD'+'27'+'_1',theoryDocumentKD27_1);
	stringifyItem('theorySoal'+'KD'+'27'+'_1',theorySoalKD27_1);
	stringifyItem('theoryDocument'+'KD'+'27'+'_2',theoryDocumentKD27_2);
	stringifyItem('theorySoal'+'KD'+'27'+'_2',theorySoalKD27_2);
	stringifyItem('listeningDocument'+'KD'+'27'+'_1',listeningDocumentKD27_1);
	stringifyItem('listeningSoal'+'KD'+'27'+'_1',listeningSoalKD27_1);
	stringifyItem('listeningDocument'+'KD'+'27'+'_2',listeningDocumentKD27_2);
	stringifyItem('listeningSoal'+'KD'+'27'+'_2',listeningSoalKD27_2);
	stringifyItem('speakingDocument'+'KD'+'27'+'_1',speakingDocumentKD27_1);
	stringifyItem('speakingSoal'+'KD'+'27'+'_1',speakingSoalKD27_1);
	stringifyItem('speakingDocument'+'KD'+'27'+'_2',speakingDocumentKD27_2);
	stringifyItem('speakingSoal'+'KD'+'27'+'_2',speakingSoalKD27_2);
	stringifyItem('readingDocument'+'KD'+'27'+'_1',readingDocumentKD27_1);
	stringifyItem('readingSoal'+'KD'+'27'+'_1',readingSoalKD27_1);
	stringifyItem('readingDocument'+'KD'+'27'+'_2',readingDocumentKD27_2);
	stringifyItem('readingSoal'+'KD'+'27'+'_2',readingSoalKD27_2);
	stringifyItem('writingDocument'+'KD'+'27'+'_1',writingDocumentKD27_1);
	stringifyItem('writingSoal'+'KD'+'27'+'_1',writingSoalKD27_1);
	stringifyItem('writingDocument'+'KD'+'27'+'_2',writingDocumentKD27_2);
	stringifyItem('writingSoal'+'KD'+'27'+'_2',writingSoalKD27_2);
}
function storeKD28JSON(){
	stringifyItem('theoryDocument'+'KD'+'28'+'_1',theoryDocumentKD28_1);
	stringifyItem('theorySoal'+'KD'+'28'+'_1',theorySoalKD28_1);
	stringifyItem('theoryDocument'+'KD'+'28'+'_2',theoryDocumentKD28_2);
	stringifyItem('theorySoal'+'KD'+'28'+'_2',theorySoalKD28_2);
	stringifyItem('theoryDocument'+'KD'+'28'+'_3',theoryDocumentKD28_3);
	stringifyItem('theorySoal'+'KD'+'28'+'_3',theorySoalKD28_3);
	stringifyItem('theoryDocument'+'KD'+'28'+'_4',theoryDocumentKD28_4);
	stringifyItem('theorySoal'+'KD'+'28'+'_4',theorySoalKD28_4);	
	stringifyItem('listeningDocument'+'KD'+'28'+'_1',listeningDocumentKD28_1);
	stringifyItem('listeningSoal'+'KD'+'28'+'_1',listeningSoalKD28_1);
	stringifyItem('listeningDocument'+'KD'+'28'+'_2',listeningDocumentKD28_2);
	stringifyItem('listeningSoal'+'KD'+'28'+'_2',listeningSoalKD28_2);
	stringifyItem('listeningDocument'+'KD'+'28'+'_3',listeningDocumentKD28_3);
	stringifyItem('listeningSoal'+'KD'+'28'+'_3',listeningSoalKD28_3);
	stringifyItem('listeningDocument'+'KD'+'28'+'_4',listeningDocumentKD28_4);
	stringifyItem('listeningSoal'+'KD'+'28'+'_4',listeningSoalKD28_4);	
	stringifyItem('speakingDocument'+'KD'+'28'+'_1',speakingDocumentKD28_1);
	stringifyItem('speakingSoal'+'KD'+'28'+'_1',speakingSoalKD28_1);
	stringifyItem('speakingDocument'+'KD'+'28'+'_2',speakingDocumentKD28_2);
	stringifyItem('speakingSoal'+'KD'+'28'+'_2',speakingSoalKD28_2);
	stringifyItem('readingDocument'+'KD'+'28'+'_1',readingDocumentKD28_1);
	stringifyItem('readingSoal'+'KD'+'28'+'_1',readingSoalKD28_1);
	stringifyItem('readingDocument'+'KD'+'28'+'_2',readingDocumentKD28_2);
	stringifyItem('readingSoal'+'KD'+'28'+'_2',readingSoalKD28_2);
	stringifyItem('readingDocument'+'KD'+'28'+'_3',readingDocumentKD28_3);
	stringifyItem('readingSoal'+'KD'+'28'+'_3',readingSoalKD28_3);
	stringifyItem('readingDocument'+'KD'+'28'+'_4',readingDocumentKD28_4);
	stringifyItem('readingSoal'+'KD'+'28'+'_4',readingSoalKD28_4);	
	stringifyItem('writingDocument'+'KD'+'28'+'_1',writingDocumentKD28_1);
	stringifyItem('writingSoal'+'KD'+'28'+'_1',writingSoalKD28_1);
	stringifyItem('writingDocument'+'KD'+'28'+'_2',writingDocumentKD28_2);
	stringifyItem('writingSoal'+'KD'+'28'+'_2',writingSoalKD28_2);
}
function storeKD29JSON(){
	stringifyItem('theoryDocument'+'KD'+'29'+'_1',theoryDocumentKD29_1);
	stringifyItem('theorySoal'+'KD'+'29'+'_1',theorySoalKD29_1);
	stringifyItem('theoryDocument'+'KD'+'29'+'_2',theoryDocumentKD29_2);
	stringifyItem('theorySoal'+'KD'+'29'+'_2',theorySoalKD29_2);
	stringifyItem('theoryDocument'+'KD'+'29'+'_3',theoryDocumentKD29_3);
	stringifyItem('theorySoal'+'KD'+'29'+'_3',theorySoalKD29_3);
	stringifyItem('theoryDocument'+'KD'+'29'+'_4',theoryDocumentKD29_4);
	stringifyItem('theorySoal'+'KD'+'29'+'_4',theorySoalKD29_4);	
	stringifyItem('listeningDocument'+'KD'+'29'+'_1',listeningDocumentKD29_1);
	stringifyItem('listeningSoal'+'KD'+'29'+'_1',listeningSoalKD29_1);
	stringifyItem('listeningDocument'+'KD'+'29'+'_2',listeningDocumentKD29_2);
	stringifyItem('listeningSoal'+'KD'+'29'+'_2',listeningSoalKD29_2);
	stringifyItem('listeningDocument'+'KD'+'29'+'_3',listeningDocumentKD29_3);
	stringifyItem('listeningSoal'+'KD'+'29'+'_3',listeningSoalKD29_3);
	stringifyItem('listeningDocument'+'KD'+'29'+'_4',listeningDocumentKD29_4);
	stringifyItem('listeningSoal'+'KD'+'29'+'_4',listeningSoalKD29_4);	
	stringifyItem('speakingDocument'+'KD'+'29'+'_1',speakingDocumentKD29_1);
	stringifyItem('speakingSoal'+'KD'+'29'+'_1',speakingSoalKD29_1);
	stringifyItem('speakingDocument'+'KD'+'29'+'_2',speakingDocumentKD29_2);
	stringifyItem('speakingSoal'+'KD'+'29'+'_2',speakingSoalKD29_2);
	stringifyItem('readingDocument'+'KD'+'29'+'_1',readingDocumentKD29_1);
	stringifyItem('readingSoal'+'KD'+'29'+'_1',readingSoalKD29_1);
	stringifyItem('readingDocument'+'KD'+'29'+'_2',readingDocumentKD29_2);
	stringifyItem('readingSoal'+'KD'+'29'+'_2',readingSoalKD29_2);
	stringifyItem('readingDocument'+'KD'+'29'+'_3',readingDocumentKD29_3);
	stringifyItem('readingSoal'+'KD'+'29'+'_3',readingSoalKD29_3);
	stringifyItem('readingDocument'+'KD'+'29'+'_4',readingDocumentKD29_4);
	stringifyItem('readingSoal'+'KD'+'29'+'_4',readingSoalKD29_4);	
	stringifyItem('writingDocument'+'KD'+'29'+'_1',writingDocumentKD29_1);
	stringifyItem('writingSoal'+'KD'+'29'+'_1',writingSoalKD29_1);
	stringifyItem('writingDocument'+'KD'+'29'+'_2',writingDocumentKD29_2);
	stringifyItem('writingSoal'+'KD'+'29'+'_2',writingSoalKD29_2);
}
function storeKD30JSON(){
	stringifyItem('theoryDocument'+'KD'+'30'+'_1',theoryDocumentKD30_1);
	stringifyItem('theorySoal'+'KD'+'30'+'_1',theorySoalKD30_1);
	stringifyItem('theoryDocument'+'KD'+'30'+'_2',theoryDocumentKD30_2);
	stringifyItem('theorySoal'+'KD'+'30'+'_2',theorySoalKD30_2);
	stringifyItem('listeningDocument'+'KD'+'30'+'_1',listeningDocumentKD30_1);
	stringifyItem('listeningSoal'+'KD'+'30'+'_1',listeningSoalKD30_1);
	stringifyItem('listeningDocument'+'KD'+'30'+'_2',listeningDocumentKD30_2);
	stringifyItem('listeningSoal'+'KD'+'30'+'_2',listeningSoalKD30_2);
	stringifyItem('speakingDocument'+'KD'+'30'+'_1',speakingDocumentKD30_1);
	stringifyItem('speakingSoal'+'KD'+'30'+'_1',speakingSoalKD30_1);
	stringifyItem('speakingDocument'+'KD'+'30'+'_2',speakingDocumentKD30_2);
	stringifyItem('speakingSoal'+'KD'+'30'+'_2',speakingSoalKD30_2);
	stringifyItem('readingDocument'+'KD'+'30'+'_1',readingDocumentKD30_1);
	stringifyItem('readingSoal'+'KD'+'30'+'_1',readingSoalKD30_1);
	stringifyItem('readingDocument'+'KD'+'30'+'_2',readingDocumentKD30_2);
	stringifyItem('readingSoal'+'KD'+'30'+'_2',readingSoalKD30_2);
	stringifyItem('writingDocument'+'KD'+'30'+'_1',writingDocumentKD30_1);
	stringifyItem('writingSoal'+'KD'+'30'+'_1',writingSoalKD30_1);
	stringifyItem('writingDocument'+'KD'+'30'+'_2',writingDocumentKD30_2);
	stringifyItem('writingSoal'+'KD'+'30'+'_2',writingSoalKD30_2);
}
function storeKD31JSON(){
	stringifyItem('theoryDocument'+'KD'+'31'+'_1',theoryDocumentKD31_1);
	stringifyItem('theorySoal'+'KD'+'31'+'_1',theorySoalKD31_1);
	stringifyItem('theoryDocument'+'KD'+'31'+'_2',theoryDocumentKD31_2);
	stringifyItem('theorySoal'+'KD'+'31'+'_2',theorySoalKD31_2);
	stringifyItem('theoryDocument'+'KD'+'31'+'_3',theoryDocumentKD31_3);
	stringifyItem('theorySoal'+'KD'+'31'+'_3',theorySoalKD31_3);
	stringifyItem('theoryDocument'+'KD'+'31'+'_4',theoryDocumentKD31_4);
	stringifyItem('theorySoal'+'KD'+'31'+'_4',theorySoalKD31_4);	
	stringifyItem('listeningDocument'+'KD'+'31'+'_1',listeningDocumentKD31_1);
	stringifyItem('listeningSoal'+'KD'+'31'+'_1',listeningSoalKD31_1);
	stringifyItem('listeningDocument'+'KD'+'31'+'_2',listeningDocumentKD31_2);
	stringifyItem('listeningSoal'+'KD'+'31'+'_2',listeningSoalKD31_2);
	stringifyItem('listeningDocument'+'KD'+'31'+'_3',listeningDocumentKD31_3);
	stringifyItem('listeningSoal'+'KD'+'31'+'_3',listeningSoalKD31_3);
	stringifyItem('listeningDocument'+'KD'+'31'+'_4',listeningDocumentKD31_4);
	stringifyItem('listeningSoal'+'KD'+'31'+'_4',listeningSoalKD31_4);	
	stringifyItem('speakingDocument'+'KD'+'31'+'_1',speakingDocumentKD31_1);
	stringifyItem('speakingSoal'+'KD'+'31'+'_1',speakingSoalKD31_1);
	stringifyItem('speakingDocument'+'KD'+'31'+'_2',speakingDocumentKD31_2);
	stringifyItem('speakingSoal'+'KD'+'31'+'_2',speakingSoalKD31_2);
	stringifyItem('readingDocument'+'KD'+'31'+'_1',readingDocumentKD31_1);
	stringifyItem('readingSoal'+'KD'+'31'+'_1',readingSoalKD31_1);
	stringifyItem('readingDocument'+'KD'+'31'+'_2',readingDocumentKD31_2);
	stringifyItem('readingSoal'+'KD'+'31'+'_2',readingSoalKD31_2);
	stringifyItem('readingDocument'+'KD'+'31'+'_3',readingDocumentKD31_3);
	stringifyItem('readingSoal'+'KD'+'31'+'_3',readingSoalKD31_3);
	stringifyItem('readingDocument'+'KD'+'31'+'_4',readingDocumentKD31_4);
	stringifyItem('readingSoal'+'KD'+'31'+'_4',readingSoalKD31_4);	
	stringifyItem('writingDocument'+'KD'+'31'+'_1',writingDocumentKD31_1);
	stringifyItem('writingSoal'+'KD'+'31'+'_1',writingSoalKD31_1);
	stringifyItem('writingDocument'+'KD'+'31'+'_2',writingDocumentKD31_2);
	stringifyItem('writingSoal'+'KD'+'31'+'_2',writingSoalKD31_2);
}
function storeKD32JSON(){
	stringifyItem('theoryDocument'+'KD'+'32'+'_1',theoryDocumentKD32_1);
	stringifyItem('theorySoal'+'KD'+'32'+'_1',theorySoalKD32_1);
	stringifyItem('theoryDocument'+'KD'+'32'+'_2',theoryDocumentKD32_2);
	stringifyItem('theorySoal'+'KD'+'32'+'_2',theorySoalKD32_2);
	stringifyItem('theoryDocument'+'KD'+'32'+'_3',theoryDocumentKD32_3);
	stringifyItem('theorySoal'+'KD'+'32'+'_3',theorySoalKD32_3);
	stringifyItem('theoryDocument'+'KD'+'32'+'_4',theoryDocumentKD32_4);
	stringifyItem('theorySoal'+'KD'+'32'+'_4',theorySoalKD32_4);	
	stringifyItem('listeningDocument'+'KD'+'32'+'_1',listeningDocumentKD32_1);
	stringifyItem('listeningSoal'+'KD'+'32'+'_1',listeningSoalKD32_1);
	stringifyItem('listeningDocument'+'KD'+'32'+'_2',listeningDocumentKD32_2);
	stringifyItem('listeningSoal'+'KD'+'32'+'_2',listeningSoalKD32_2);
	stringifyItem('listeningDocument'+'KD'+'32'+'_3',listeningDocumentKD32_3);
	stringifyItem('listeningSoal'+'KD'+'32'+'_3',listeningSoalKD32_3);
	stringifyItem('listeningDocument'+'KD'+'32'+'_4',listeningDocumentKD32_4);
	stringifyItem('listeningSoal'+'KD'+'32'+'_4',listeningSoalKD32_4);	
	stringifyItem('speakingDocument'+'KD'+'32'+'_1',speakingDocumentKD32_1);
	stringifyItem('speakingSoal'+'KD'+'32'+'_1',speakingSoalKD32_1);
	stringifyItem('speakingDocument'+'KD'+'32'+'_2',speakingDocumentKD32_2);
	stringifyItem('speakingSoal'+'KD'+'32'+'_2',speakingSoalKD32_2);
	stringifyItem('readingDocument'+'KD'+'32'+'_1',readingDocumentKD32_1);
	stringifyItem('readingSoal'+'KD'+'32'+'_1',readingSoalKD32_1);
	stringifyItem('readingDocument'+'KD'+'32'+'_2',readingDocumentKD32_2);
	stringifyItem('readingSoal'+'KD'+'32'+'_2',readingSoalKD32_2);
	stringifyItem('readingDocument'+'KD'+'32'+'_3',readingDocumentKD32_3);
	stringifyItem('readingSoal'+'KD'+'32'+'_3',readingSoalKD32_3);
	stringifyItem('readingDocument'+'KD'+'32'+'_4',readingDocumentKD32_4);
	stringifyItem('readingSoal'+'KD'+'32'+'_4',readingSoalKD32_4);	
	stringifyItem('writingDocument'+'KD'+'32'+'_1',writingDocumentKD32_1);
	stringifyItem('writingSoal'+'KD'+'32'+'_1',writingSoalKD32_1);
	stringifyItem('writingDocument'+'KD'+'32'+'_2',writingDocumentKD32_2);
	stringifyItem('writingSoal'+'KD'+'32'+'_2',writingSoalKD32_2);
}
