// this file is a tempoary fix.
// Eventually, all these files should be exposing their
// own interface and requesting their own dependencies
// rather than monkey-patching a global

import 'aws-sdk/dist/aws-sdk'

const { util, VERSION, Signers, Protocol, XML, JSON, Model, apiLoader, Service, Credentials, CredentialProviderChain, TemporaryCredentials, WebIdentityCredentials, CognitoIdentityCredentials, SAMLCredentials, Config, config, Endpoint, HttpRequest, HttpResponse, HttpClient, SequentialExecutor, EventListeners, Request, Response, ResourceWaiter, ParamValidator, events, XHRClient, ACM, APIGateway, ApplicationAutoScaling, AutoScaling, CloudFormation, CloudFront, CloudHSM, CloudTrail, CloudWatch, CloudWatchEvents, CloudWatchLogs, CodeCommit, CodeDeploy, CodePipeline, CognitoIdentity, CognitoIdentityServiceProvider, CognitoSync, ConfigService, DeviceFarm, DirectConnect, DynamoDB, DynamoDBStreams, EC2, ECR, ECS, ElastiCache, ElasticBeanstalk, ElasticTranscoder, ELB, EMR, Firehose, GameLift, Inspector, IotData, Kinesis, KMS, Lambda, MachineLearning, MarketplaceCommerceAnalytics, MobileAnalytics, OpsWorks, RDS, Redshift, Route53, Route53Domains, S3, SES, SNS, SQS, SSM, StorageGateway, STS, WAF } = window.AWS
window.AWSCognito = window.AWS

import './CognitoUser'
import './CognitoUserPool'
import './CognitoRefreshToken'
import './CognitoIdToken'
import './CognitoAccessToken'
import './AuthenticationDetails'
import './CognitoUserSession'
import './CognitoUserAttribute'
import './AuthenticationHelper'
import './DateHelper'

const { AWS, AWSCognito } = window
const { CognitoUser, CognitoUserPool, CognitoRefreshToken, CognitoIdToken, CognitoAccessToken, AuthenticationDetails, CognitoUserSession, CognitoUserAttribute, AuthenticationHelper, DateHelper } = AWSCognito.CognitoIdentityServiceProvider

// export all of AWS, AWSCognito, and amazon-cognito-identity stuff
export { AWS, AWSCognito, CognitoUser, CognitoUserPool, CognitoRefreshToken, CognitoIdToken, CognitoAccessToken, AuthenticationDetails, CognitoUserSession, CognitoUserAttribute, AuthenticationHelper, DateHelper, util, VERSION, Signers, Protocol, XML, JSON, Model, apiLoader, Service, Credentials, CredentialProviderChain, TemporaryCredentials, WebIdentityCredentials, CognitoIdentityCredentials, SAMLCredentials, Config, config, Endpoint, HttpRequest, HttpResponse, HttpClient, SequentialExecutor, EventListeners, Request, Response, ResourceWaiter, ParamValidator, events, XHRClient, ACM, APIGateway, ApplicationAutoScaling, AutoScaling, CloudFormation, CloudFront, CloudHSM, CloudTrail, CloudWatch, CloudWatchEvents, CloudWatchLogs, CodeCommit, CodeDeploy, CodePipeline, CognitoIdentity, CognitoIdentityServiceProvider, CognitoSync, ConfigService, DeviceFarm, DirectConnect, DynamoDB, DynamoDBStreams, EC2, ECR, ECS, ElastiCache, ElasticBeanstalk, ElasticTranscoder, ELB, EMR, Firehose, GameLift, Inspector, IotData, Kinesis, KMS, Lambda, MachineLearning, MarketplaceCommerceAnalytics, MobileAnalytics, OpsWorks, RDS, Redshift, Route53, Route53Domains, S3, SES, SNS, SQS, SSM, StorageGateway, STS, WAF }
