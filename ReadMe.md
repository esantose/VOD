How to access DB and validate User-Info to login
1. Startup.cs > Configuration() 
2. goto ConfigureOAuth()
3. Goto Config.GetDatabaseControlSetting()
4. Config.cs > GetDatabaseControlSetting(arg) 
5. ReadDBConfig(arg)
6. DBActions.cs > StartUp()
7. Read the VenioSetup.ini
8. Config.cs > ReadDBConfig(arg)
9. GetControlSettings, urlApi
