Reactivities
============

* Create Solution
dotnet new sln

* Create projects
dotnet new classlib -n Domain
dotnet new classlib -n Application
dotnet new classlib -n Persistence

* Create API project
dotnet new webapi -n API

* Add projects to solution
dotnet sln add Domain
dotnet sln add Application
dotnet sln add Persistence
dotnet sln add API


* Add dependencies between projects
cd .\Application\
dotnet add reference ..\Domain\
dotnet add reference ..\Persistence\
cd ..\API\
dotnet.exe add reference ..\Application\
cd ..\Persistence\
dotnet.exe add reference ..\Domain\

* Install projects dependencies
dotnet add ./API package Microsoft.EntityFrameworkCore.Design
dotnet add ./Persistence package Microsoft.EntityFrameworkCore.Core
dotnet add ./Persistence package Microsoft.EntityFrameworkCore.SqlServer

* Install dotnet ef tool
dotnet tool install --global dotnet-ef

* Create database
dotnet-ef migrations add InitialCreate -p Persistence -s API