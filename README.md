# ActionTest

## git push시 이미지 빌드 및 ECR에 업로드 자동화

### Backend
- nodejs
- express

### Frontend
- react
- nginx

### Dockerfile path
- /Frontend/
- /Backend/hello-api/
- /Backend/hi-api/
- /Backend/goodmorning-api/
- /Backend/goodnight-api/

## 이미지 업로드 후 ECR에서 이미지 받아와서 ArgoCD로 재배포

### helm chart path
- /Frontend/charts/helm-example/
- /Backend/hello-api/charts/helm-example/
- /Backend/hi-api/charts/helm-example/
- /Backend/goodmorning-api/charts/helm-example/
- /Backend/goodnight-api/charts/helm-example/
