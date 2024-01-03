//* promise e-posta bildirmi 

function sendEmail(subject, content) {
  console.log(`E-posta gönderildi:\nKonu: ${subject}\nİçerik: ${content}`);
}

function validateUser(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'user' && password === '1234') {
        resolve("Giriş başarılı!");
      } else {
        reject("Kullanıcı adı veya şifre yanlış.");
      }
    }, 2000);
  });
}

const userEmail = 'user@example.com';
const emailSubject = 'Giriş Bildirimi';
const emailContent = 'Başarılı bir şekilde giriş yapıldı!';

validateUser('user', '1234')
  .then((message) => {
    console.log(message);
    // Kullanıcı doğrulandı, e-posta gönderme islemi
    sendEmail(emailSubject, emailContent);
  })
  .catch((error) => {
    console.log(error);
  });


 //* callback e-posta bildirmi 
    
  function WithCallback(username, password, callback) {
    setTimeout(() => {
      if (username === 'user' && password === '1234') {
        callback(null, "Giriş başarılı!");
      } else {
        callback("Kullanıcı adı veya şifre yanlış.");
      }
    }, 2000);
  }
  

  WithCallback('user', '1234', (error, message) => {
    if (error) {
      console.log(error);
    } else {
      console.log(message);

      sendEmail(emailSubject, emailContent, () => {
        console.log('E-posta gönderildi.');
      });
    }
  });
  