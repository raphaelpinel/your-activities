dotnet CLI commands

```
dotnet new sln //creates solution file
dotnet new classlib -n Domain

dotnet new classlib -n Application
dotnet new classlib -n Persistence
dotnet new webspi -n API

dotnet sln -h
dotnet sln add Domain
dotnet sln list

cd Application
dotnet add reference ../Domain/
dotnet add reference ../Persistence/
```
hide bin and obj
VSCode preferences > settings
exclude
add pattern
**/bin
**/obj

Example of running the application
`dotnet run -p API/`
Open the browser and paste `http://localhost:5000/api/values` or `http://localhost:5000/api/values/33`