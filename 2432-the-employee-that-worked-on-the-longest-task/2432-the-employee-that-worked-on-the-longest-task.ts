function hardestWorker(n: number, logs: number[][]): number {
    let max = 0;
    let minId = n;

    for(let i=0; i<logs.length; i++){
        if(i===0){
            max = logs[i][1];
            minId = logs[i][0];
        }
        else {
            if(logs[i][1]-logs[i-1][1] > max){
                max = Math.max(max, logs[i][1]-logs[i-1][1]);
                minId = logs[i][0];
            }
            else if(logs[i][1]-logs[i-1][1] === max){
                minId = Math.min(minId, logs[i][0]);
            }

        }
    }

    return minId;
};