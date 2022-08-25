class Solution {
    public double average(int[] salary) {
        int x = 0; 
        int y = x + 1;
        int sum = 0;
        
        while (x < salary.length - 1) {
            if (salary[x] > salary[y]) {
                int temp = salary[x];
                salary[x] = salary[y];
                salary[y] = temp;
            }
            
            y += 1; 
            
            if (y == salary.length) {
                x += 1;
                y = x + 1;
            }
        }
    
        
        for (int i = 0; i < salary.length; i += 1) {
            if (i != 0 && i != salary.length - 1) {
                sum += salary[i];
            }
        }
        
        return (double)sum / (salary.length - 2);
    }
}