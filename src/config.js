export default {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-upload-app-serverless"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://jzttyzewsl.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_Fb7vMrLpa",
    APP_CLIENT_ID: "kbl0sfbp2kuruhasdint45r7l",
    IDENTITY_POOL_ID: "us-east-1:fe646bd2-b34c-49a9-aa86-46e53024302f"
  }
};