function solution(A) {
    return A.sort((a, b) => a < b).reduce((acc, num, i, arr) => {
        if (num === (acc + 1)) {
            acc++
        }

        return acc
    }, 1)
}

solution()
