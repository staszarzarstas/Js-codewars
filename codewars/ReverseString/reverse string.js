function solution(str) {
    reverseStr = str.split('')
    ReverseArr = reverseStr.reverse()
    joinRev = ReverseArr.join('')
    return joinRev;
}