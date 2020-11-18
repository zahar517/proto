## Usage example:

#### Requirements: 
buf: https://docs.buf.build/installation

#### compile services:
```bash
buf check lint #Check that the input location passes lint checks.
buf check breaking #Check that the input location has no breaking changes compared to the against location.

buf generate  #Generate stubs for protoc plugins using a template. 
```

#### import:
```javascript
import { credentials } from '@grpc/grpc-js';
import { NotificationServiceClient, SendMailRequest, MailType } from '@mrm/proto/services/notification/v1';
```

#### client:
```javascript
const client = new NotificationServiceClient('0.0.0.0:50051', credentials.createInsecure());

const request = new SendMailRequest();
request.setFrom('1@rom4.ru');
request.setToList(['2@rom4.ru']);
request.setSubject('Test subject');
request.setType(MailType.MAIL_TYPE_CORRECTION_CREATED);
request.setPayload('payload');

client.sendMail(request, (err, response) => {
    if (err) {
        console.error(err);
    } else {
        console.info(response);
    }
});
```

#### server:
```javascript
function sendMail({ request }, callback) {
    console.info('request:', request.toObject());
    const response = new SendMailResponse();
    response.setSuccess(true);
    callback(null, response);
}

const server = new Server();
server.addService(NotificationServiceService, { sendMail });
server.bindAsync('0.0.0.0:50051', ServerCredentials.createInsecure(), (err, port) => {
    if (err) {
        console.error(err);
    } else {
        console.info(`Server started! on ${port}`);
        server.start();
    }
});

```
