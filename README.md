# Amplify React Auth

## 기능 설명
AWS의 Cognito 서비스를 활용하여 React Applicaion에서 <br> 회원 관리 기능을 빠르게 추가할 수 있습니다.

## Amplify 활용 가치
기존의 AWS Cognito 서비스를 등록하고 인증 키를 등록하는 과정들이 복잡할 수 있는데, <br>
Amplify에서는 그 과정들을 자동을 수행해 줍니다. <br>
Amplify에서 생성한 AWS 서비스들은 Cloudformation 관리 되어 일괄적으로 삭제, 생성 가능합니다. <br>
인증 말고도 다른 여러가지 AWS 서비스를 기능 단위로 추가할 수 있도록 도와주고, <br> 
서비스에 연동 가능한 React 컴포넌트를 제공합니다.

## 관련 자료
AWS Cognito 요금 정책 : https://aws.amazon.com/cognito/pricing/ <br>
참고 영상 : https://www.youtube.com/watch?v=uiTQL7Ne8rY <br>
Amplify Document : https://aws-amplify.github.io/docs/js/start

## 관련 문서

* Amplify Cli 설치
```
  $ npm i -g aws-amplify/cli
```

*  리엑트 프로젝트 생성
```
  $ create-react-app amplify-ex
  $ cd amplify-ex
```

* IAM키 등록

AWS에 접속하여  필요한 권한을 가진 IAM 추가, <br> 등록된 IAM을 PC에 등록 합니다.<br>
IAM 관련 설정 파일은 **사용자폴더/.aws/credentials** 에 위치합니다

* Amplify 초기화
```
  $ amplify init
```
프로젝트 초기 설정을 진행 합니다.

* 로그인 기능 추가
```
  $ amplify add auth
```
Cognito 서비스 관련 설정을 진행합니다.

* Cloudformation에 auth 기능 추가 사항 적용
```
  $ amplify push
```
완료 후 AWS Cloudformation 탭에서 추가로 생성된 stack을 활용하실 수 있습니다. <br>
Cognito 탭에서는 생성된 UserPool을 확인하실 수 있습니다. <br>
서비스 관련 key들은 Amplify에서 src/aws-exports.js 파일에 등록합니다. <br>

* Amplify 프론트 라이브러리 설치
```
  npm install aws-amplify
```

* Amplify를 React에서 활용하기 위한 라이브러리설치
```
  npm install aws-amplify-react
```

* React에 설정파일 적용

src/index.js
```
import Amplify from "aws-amplify";
import config from "./aws-exports";
Amplify.configure(config);
```

* 인증 체크 기능 추가
```
import { widthAuthenticator } from 'aws-amplify-react'

class App extends Component{
  ...
}

export default widthAuthenticator(App)
```

위의 과정으로 로그인 하지 않은 유저가 App 컴포넌트에 접근하려고 하면 <br>
Amplify 에서 구현한 로그인 컴포넌트가 나타납니다. <br>
로그인, 회원가입, 비밀번호 찾기 같은 컴포넌트들을 <br> Amplify에서 AWS Cognito 서비스를 활용하여 빠르게 구현합니다.
