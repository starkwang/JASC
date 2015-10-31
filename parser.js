module.exports = parser;

function parser(tokenArray) {
    // var status; //0:标签内部  1:非标签内部
    // var nowTagName = '';
    // var nowNode;
    var tagArray = [];
    var nodeHeap = [];
    var nodeTree = {
        name: 'root',
        child: []
    };
    nodeHeap.push(nodeTree);
    tokenArray.forEach(function(item, index) {
        if (item == '<') {
            tagArray.push(tokenArray[index + 1]);
        }
    })
    var selfEndTags = ['img', 'br', 'hr', 'col', 'area', 'link', 'meta', 'frame', 'input', 'param'];
    tagArray.forEach(function(item, index) {
        if (item[0] == '!' || selfEndTags.indexOf(item) != -1) {
            //自封闭标签、注释
            nodeHeap[nodeHeap.length-1].child.push({
                name: item,
                child: 0
            });
        } else {
            if (item[0] != '/') {
                //普通标签头
                var newNode = {
                    name: item,
                    child: []
                }
                nodeHeap[nodeHeap.length-1].child.push(newNode);
                nodeHeap.push(newNode);
            }else{
                //普通标签尾
                if(item.split('/')[1] == nodeHeap[nodeHeap.length-1].name){
                    nodeHeap.pop();
                }
            }

        }
    })
    return nodeTree;
}
