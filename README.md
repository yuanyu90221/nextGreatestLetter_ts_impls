# Find Smallest Letter Than Target

This repo is for implementation for solve  leetcode 744

## Description

給定一個排序過的小寫字元陣列 letters 以非遞減方式排序,並且給定一個字元 target

找出 letters 中大於字元 target 的最小字元 

特別注意的是： 字元大小可以是循環的 也就是 'a' > 'z'

舉例來說: target: 'z' , letters: ['a', 'b'] , 答案則是 'a'

## 觀察

首先是要找的目標： 最小大於 target 字元也就是相當於在找 target 字元的下一個字元所可以插入的位置

第二個是以非遞減方式排序陣列，代表會有重複值

## 初步想法是

1 每次先算出 字元下一個位階的字元 nextChar = (target + 1) % 26

2 找出目前這個字元可以插入的位置

## 參考別人作法

直接先找出目前 target 所能插入的位置

然後檢驗目前位置值 如果 <= target 且為最後一個值， 則回傳最前面一個值

如果 <= target 非最後面一個值，則把搜尋下界更新為該位置 + 1

如果 > target 且為最後一個值，則回傳該值

如果 > target 且不是最後一個值，更新搜尋上界為該位置 - 1

檢查搜尋下介是否為在範圍內 

如果是 則返回該下界的值

否則回傳第一個值