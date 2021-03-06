import enLocale from 'element-ui/lib/locale/lang/en'

const en = {
    message: {

        'save': 'Save',
        'cancel': 'Cancel',
        'refresh': 'Refresh',
        'query': 'Query',
        'reset': 'Reset',
        'keyword': 'Keyword',
        'run': 'Run',
        'edit': 'Edit',
        'delete': 'Delete',
        'success': 'Success',
        'failed': 'Failed',
        'detail': 'Detail',
        'download': 'Download',
        'stop': 'Stop',
        'back': 'Back',
        'all': 'ALL',
        'more': '| More',

        // 欢迎界面
        'appRegister': 'App Registration',
        'userRegister': 'User Registration',
        'appNameInputPLH': 'Enter The AppName',
        'appName': 'AppName',
        'appPassword': 'AppPassword',
        'register': 'Register',
        'name': 'Name',
        'phone': 'Phone',
        'email': 'Email',
        'webhook': 'Webhook',
        'welcomeTitle': 'Welcome to use PowerJob!',
        'login': 'Login',
        'logout': 'Logout',
        'changeAppInfo': 'Change AppInfo',
        'newPassword': 'New Password',
        'newPassword2': 'Check New Password',
        'stayLogged': 'Keep me logged in',

        'tabHome': 'Home',
        'tabJobManage': 'Job management',
        'tabJobInstance': 'Job instances',
        'tabWorkflowManage': 'Workflow management',
        'tabWfInstance': 'Workflow instances',
        'tabContainerOps': 'Container DevOps',
        'tabTemplate': 'Template generator',
        'tabContainerManager': 'Container Management',

        'omsServerTime': 'Server Time',
        'omsServerTimezone': 'Server Timezone',
        'localBrowserTime': 'Local Time',
        'localBrowserTimezone': 'Local Timezone',
        'githubURL': 'GitHub Repo',
        'docURL': 'Document Address',
        'totalJobNum': 'Total job num',
        'runningInstanceNum': 'Running instance num',
        'recentFailedInstanceNum': 'Recent failed instance num',
        'workerNum': 'Worker node num',
        'workerAddress': 'Worker address',
        'cpuLoad': 'CPU Load',
        'memoryLoad': 'Memory Load',
        'diskLoad': 'Disk Load',

        // JobManage
        'jobId': 'JobID',
        'instanceId': 'InstanceID',
        'jobName': 'JobName',
        'scheduleInfo': 'ScheduleInfo',
        'executeType': 'ExecutionType',
        'processorType': 'ProcessorType',
        'status': 'Status',
        'operation': 'Operation',
        'newJob': 'New Job',
        'jobDescription': 'JobDescription',
        'jobParams': 'JobParams',
        'timeExpressionType': 'TimeExpressionType',
        'timeExpressionPlaceHolder': 'Cron expression or number of millions for fixed_rate/fixed_delay job',
        'executeConfig': 'ExecutionConfig',
        'javaProcessorInfoPLH': 'Classname, eg: com.github.kfcfans.DemoProcessor',
        'containerProcessorInfoPLH': 'ContainerID#classname, eg: 1#com.github.kfcfans.DemoProcessor',
        'shellProcessorInfoPLH': 'Shell script',
        'pythonProcessorInfoPLH': 'Python script',
        'runtimeConfig': 'RuntimeConfig',
        'maxInstanceNum': 'MaxInstanceNum',
        'threadConcurrency': 'ThreadConcurrency',
        'timeout': 'TimeLimit (ms)',
        'retryConfig': 'RetryConfig',
        'taskRetryTimes': 'InstanceRetryTimes',
        'subTaskRetryTimes': "TaskRetryTimes",
        'workerConfig': 'WorkerConfig',
        'minCPU': 'MinAvailableCPUCores',
        'minMemory': 'MinMemory(GB)',
        'minDisk': 'MinDisk(GB)',
        'clusterConfig': 'ClusterConfig',
        'designatedWorkerAddress': 'DesignatedWorkerAddress',
        'designatedWorkerAddressPLH': 'Empty for all workers; ip:port,ip:port for specific',
        'maxWorkerNum': 'MaxWorkerNum',
        'maxWorkerNumPLH': '0 means no limit',
        'alarmConfig': 'AlarmConfig',
        'alarmSelectorPLH': 'Alarm receiver(s)',
        'standalone': 'Standalone',
        'broadcast': 'Broadcast',
        'map': 'MAP',
        'mapReduce': 'MapReduce',
        'fixRate': 'Fixed Rate (ms)',
        'fixDelay': 'Fixed Delay (ms)',
        'workflow': 'Workflow',
        'validateTimeExpression': 'Validate',
        'javaContainer': 'Java（Container）',
        'runHistory': 'History',
        'reRun': 'Retry',

        // JobInstance
        'wfInstanceId': 'WorkflowInstanceId',
        'normalInstance': 'Normal instance',
        'wfInstance': 'Workflow instance',
        'triggerTime': 'Trigger time',
        'finishedTime': 'Finished time',
        'log': 'Log',
        'runningTimes': 'Running times',
        'taskTrackerAddress': 'TaskTracker address',
        'startTime': 'Start time',
        'expectedTriggerTime': 'Expected trigger time',
        'result': 'Result',
        'subTaskInfo': 'Task info',
        'secondlyJobHistory': 'SecondlyJobHistory',
        'subInstanceId': 'SubInstanceId',
        'instanceParams': 'InstanceParams',

        // workflowManage
        'wfId': 'WorkflowID',
        'wfName': 'WorkflowName',
        'newWorkflow': 'New workflow',
        'wfDescription': 'Description',
        'importJob': 'Import job',
        'deleteJob': 'Delete job',
        'newStartPoint': 'New starting point',
        'newEndPoint': 'New ending point',
        'deleteEdge': 'Delete edge',
        'importJobTitle': "Select jobs",
        'wfTimeExpressionPLH': 'Cron expression for CRON or empty for API',
        'import': 'Import',
        'ntfClickNeedDeleteNode': 'Please click on the node you want to delete.',
        'ntfClickStartPoint': 'Please click on the start node',
        'ntfClickTargetPoint': 'Please click on the end node',
        'ntfClickDeleteEdge': 'Please click on the edge you want to remove.',
        'ntfAddStartPointFirst': 'Please add the starting point first!',
        'ntfInvalidEdge': 'Illegal operation (same origin and destination)!',

        // workflowInstance
        'wfTips': 'tips：Click on a node to view details of the job instance',
        'ntfClickWaitingNode': 'Waiting for the upstream instances... No instances have been generated, and details cannot be viewed!',
        'wfInitParams': 'InitParams',

        // 容器
        'newContainer': 'New container',
        'containerType': 'Type',
        'containerGitURL': 'Git URL',
        'branchName': 'Branch',
        'username': 'Username',
        'oldPassword': 'Old password',
        'password': 'Password',
        'containerId': 'ID',
        'containerName': 'Name',
        'containerVersion': 'Version',
        'deployTime': 'Deployed time',
        'deploy': 'Deploy',
        'deployedWorkerList': 'Worker list',
        'uploadTips': 'Drag and drop or click on the file to upload it automatically',

        // 任务实例状态
        'waitingDispatch': 'Waiting dispatch',
        'waitingWorkerReceive': 'Waiting receive',
        'running': 'Running',
        'stopped': 'Stopped',
        'canceled': 'Canceled',
        'wfWaiting': 'Waiting',
        'waitingUpstream': 'Waiting upstream'

    },
    ...enLocale
};

export default en
