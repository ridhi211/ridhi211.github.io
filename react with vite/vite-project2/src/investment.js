import { useState } from "react"

export function calculateInvestmentResults(
    {
        initialInvestment,
        annualInvestment,
        expectedReturn,
        duration
    }) {

    const annualData = []
    let investmentValue = initialInvestment

    for (let i = 0; i < duration; i++) {
        const interestEarnedInYear = investmentValue * (expectedReturn/100)
        investmentValue += interestEarnedInYear + annualInvestment
        annualData.push({
            year: i + 1,
            interest: interestEarnedInYear,
            valueEndOfYear: investmentValue,
            annualInvestment: annualInvestment

        })
    }
    return annualData
}

export const formatter = new Intl.NumberFormat('en-IN', {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
})