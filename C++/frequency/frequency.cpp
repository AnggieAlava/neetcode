#include <algorithm>
#include <iostream>
#include <string>
#include <unordered_map>

std::pair<char, int> frequency(const std::string& sentence) {
    std::unordered_map<char, int> charFrequency;
    for (char c : sentence) {
        charFrequency[c]++;
    }
    auto compare = [](const std::pair<char, int>& a, const std::pair<char, int>& b) {
        return a.second < b.second;  // Cambio de '>' a '<'
    };
    auto mostFrequent = std::max_element(charFrequency.begin(), charFrequency.end(), compare);
    return *mostFrequent;
}

int main() {
    std::string sample = "This is a common interview question";
    auto result = frequency(sample);
    std::cout << "Most frequent character: " << result.first << ", Frequency: " << result.second << std::endl;
    return 0;
}
