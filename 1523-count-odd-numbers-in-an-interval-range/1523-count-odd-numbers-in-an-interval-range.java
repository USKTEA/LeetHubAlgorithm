class Solution {
    public int countOdds(int low, int high) {
        //low high가 홀수 인지.
        // 3 4 5 6 7  -> 7과 3 사이 3개 숫자. 하나가 홀수면 -1 두개다 홀수면 -2 
        // 2 3 4 5 6 7 8 9 둘다 짝수면 high - low - 1 /2 , 하나면 high - low -1 / 2 + 1 
        // 3 4 5 6 7 8 9 둘다 홀수 floor 5 / 2 + 2  
        
        if (low % 2 == 0 && high % 2 == 0) {
            return (int)Math.ceil((high - (double)low - 1) / 2); 
        }
        
        if (low % 2 == 0 ^ high % 2 == 0) {
            return (high - low - 1) / 2 + 1;
        }
        
        if (low == high) {
            return 1;
        }
        
        return (int)Math.floor((high - low - 1) / 2) + 2;
    }
}