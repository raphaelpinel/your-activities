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

create a gitignore file from template
`dotnet new gitignore --force`
if .gitignore is created late, you need to commit deleting the obj folders
`git rm -rf API/obj Application/obj Persistence/obj`
These folders will be recreated by running the app

Example of running the application
`dotnet run -p API/`
Open the browser and paste `http://localhost:5000/api/values` or `http://localhost:5000/api/values/33`

Add Nuget package
Open command palette Cmd Shift P
Nuget Add Package
Microsoft.EntityFrameworkCore
Microsoft.EntityFrameworkCore.sqlite
add to persistence project

run `dotnet restore`

in DataContext.cs, hover DbContext, Cmd . to open context menu > 
select 'using Microsoft.EntityFrameworkCore'

install entity framework tool
dotnet tool install --global dotnet-ef
run with `dotnet ef`
Run migrations
dotnet ef migrations add InitialCreate -p Persistence/ -s API/

Add Microsoft.EntityFrameworkCore.Design:
Shift Cmd P > Nuget add package > Microsoft.EntityFrameworkCore.Design > 3.1.3 > /API/API.csproj
dotnet restore

we could update the database with `dotnet ef migrations database update`
but we implement instead code inside API/Program.cs
```
cd API/
dotnet watch run
```
Shift Cmd P > Sqlite: Open Database > See in the Sqlite Explorer in the left panel

cd ..
dotnet ef migrations add SeedValues -p Persistence/ -s API/
cd API/
dotnet watch run