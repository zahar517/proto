## Usage example:

#### compile services:
```bash
buf lint
buf generate
```

#### import:
```javascript
import { credentials } from '@grpc/grpc-js';
import { SendMailRequest, MailType } from './build/services/notification/v1/notification_pb';
import { NotificationServiceClient } from './build/services/notification/v1/notification_grpc_pb';
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
const { Server, ServerCredentials } = require('@grpc/grpc-js');
const { SendMailResponse } = require('./build/services/notification/v1/notification_pb');
const { NotificationServiceService } = require('./build/services/notification/v1/notification_grpc_pb');

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
