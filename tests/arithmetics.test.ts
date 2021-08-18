import { BigNumber } from "@ethersproject/bignumber"
import { assert } from "chai"
import { ethers } from "hardhat"
import { Arithmetics__factory } from "../src/types"

interface Case {
    a: BigNumber,
    b: BigNumber,
    product: BigNumber
}


describe("arithmetics", function(){
    it("test arithmetics", async function(){
        const [signer] = await ethers.getSigners()
        const contract = await new Arithmetics__factory(signer).deploy()

        const cases: Case[] = [
            {
                a: BigNumber.from(2).pow(256).sub(1),
                b: BigNumber.from(2),
                product: BigNumber.from(2).pow(256).sub(2)

            }
        ]
        for(const {a, b, product} of cases){
            assert.equal(product.toBigInt(), (await contract.mul(a, b)).toBigInt())
        }
        
    })


})