
function isBalanced(str){
        let stack = []

        let len = str.length

        let dict = { ']': '[', '}': '{', ')': '(' }

        for (let i = 0; i < len; i++) {
                if (str[i] == '[' || str[i] == '(' || str[i] == '{') {
                        stack.push(str[i])
                } else {
                        if (stack[stack.length - 1] === dict[str[i]]) {
                                stack.pop()
                        } else {
                                return false
                        }
                }
        }

        return (stack.length === 0)

}



console.log(isBalanced("{}[]()[()]"))
console.log(isBalanced('[(])'))
console.log(isBalanced('[{()}'))

