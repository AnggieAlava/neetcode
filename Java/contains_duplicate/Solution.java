import java.util.Set;
import java.util.HashSet;

class Solution {
    public boolean containsDuplicate(int[] nums) {
        // use a hashset to know if there is any duplicates
        Set<Integer> set = new HashSet<>();

        for(int i = 0 ; i < nums.length; i++){
            if(set.contains(nums[i])){
                return true;
            }
            else{
                set.add(nums[i]);
            }
        }

        return false;
    }
    public static void main(String[] args) {
        Solution solution = new Solution();
        int[] nums = {1, 2, 3, 4}; // Example array with duplicates
        boolean containsDuplicate = solution.containsDuplicate(nums);
        System.out.println("Contains duplicate: " + containsDuplicate);
    }
}
