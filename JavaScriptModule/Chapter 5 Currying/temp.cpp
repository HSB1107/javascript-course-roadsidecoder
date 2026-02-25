#include <vector>
#include <unordered_map>
#include <set>

using namespace std;

vector<int> getMaxArray(vector<int>& data_packets) {
    int n = data_packets.size();
    
    // Global frequency map to track what's left in the remaining array
    unordered_map<int, int> suffix_freq;
    for (int x : data_packets) {
        suffix_freq[x]++;
    }

    vector<int> result;
    int current_idx = 0;

    while (current_idx < n) {
        // 1. Determine the maximum possible MEX we can get from the remaining elements
        int max_possible_mex = 0;
        while (suffix_freq[max_possible_mex] > 0) {
            max_possible_mex++;
        }

        // 2. If the maximum possible MEX is 0, all remaining elements are > 0.
        // To maximize lexicographically, we take only 1 element at a time (MEX will be 0).
        if (max_possible_mex == 0) {
            while (current_idx < n) {
                result.push_back(0);
                suffix_freq[data_packets[current_idx]]--;
                current_idx++;
            }
            break;
        }

        // 3. Find the shortest prefix that gives us this max_possible_mex
        unordered_map<int, int> window_freq;
        int window_mex_count = 0;
        int k = 0;

        while (current_idx < n && window_mex_count < max_possible_mex) {
            int val = data_packets[current_idx];
            
            // If this is a value we need for our target MEX and we haven't seen it in this window
            if (val < max_possible_mex && window_freq[val] == 0) {
                window_mex_count++;
            }
            
            window_freq[val]++;
            suffix_freq[val]--; // Remove from global pool
            current_idx++;
        }

        result.push_back(max_possible_mex);
        
        // After finding the shortest prefix, the 'current_idx' is already moved forward.
        // The while loop will repeat for the new 'suffix'.
    }

    return result;
}