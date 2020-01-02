FROM mcr.microsoft.com/dotnet/core/aspnet:3.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:3.0 AS build
WORKDIR /src
COPY ["BJJ-Scoreboard.csproj", "./"]
RUN dotnet restore "./BJJ-Scoreboard.csproj"
COPY . .
WORKDIR /src/.
RUN dotnet build "BJJ-Scoreboard.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "BJJ-Scoreboard.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "BJJ-Scoreboard.dll"]
