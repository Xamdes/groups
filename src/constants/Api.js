// AWSS3Requirement = 'https://p5e9u9fizk.execute-api.us-east-2.amazonaws.com';

// const Api = {
//   receive: '/default/testsqlquery?testname=0',
//   send: '/default/SendMessage?message='
// };

const Api = {
  receive: APINAME+'/default/testsqlquery?testname=0',
  send: APINAME+'/default/SendMessage?message='
};

export default Api;


// let apiUrl = 'https://p5e9u9fizk.execute-api.us-east-2.amazonaws.com/default/testsqlquery?testname=0';
// let apiUrl = '/default/testsqlquery?testname=0';
