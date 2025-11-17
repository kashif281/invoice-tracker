"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneratedMigration1763393268702 = void 0;
class GeneratedMigration1763393268702 {
    constructor() {
        this.name = 'GeneratedMigration1763393268702';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TYPE "public"."test-customer_status_enum" AS ENUM('Active', 'Archived', 'Delete')`);
        await queryRunner.query(`CREATE TABLE "test-customer" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" text NOT NULL, "country" text NOT NULL, "streetAddress1" text NOT NULL, "streetAddress2" text NOT NULL, "city" text NOT NULL, "state" text NOT NULL, "zipCode" text NOT NULL, "phoneNumber" text, "createdBy" text, "status" "public"."test-customer_status_enum" NOT NULL DEFAULT 'Active', CONSTRAINT "PK_a22cff6f86fb957823c8c121705" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."test-facility_status_enum" AS ENUM('Active', 'Archived', 'Delete')`);
        await queryRunner.query(`CREATE TABLE "test-facility" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" text NOT NULL, "contactName" text, "streetAddress1" text NOT NULL, "streetAddress2" text NOT NULL, "city" text NOT NULL, "state" text NOT NULL, "country" text NOT NULL, "zipCode" text NOT NULL, "status" "public"."test-facility_status_enum" NOT NULL DEFAULT 'Active', "weight" text NOT NULL, "customerId" integer, CONSTRAINT "PK_6873adb5994ed222f1e21134b5f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "payment" ("id" SERIAL NOT NULL, "payment_date" date NOT NULL, "amount" integer NOT NULL, "status" character varying(255) NOT NULL, CONSTRAINT "PK_fcaec7df5adf9cac408c686b2ab" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "invoice" ("id" SERIAL NOT NULL, "invoice_number" character varying(255) NOT NULL, "issue_date" date NOT NULL, "due_date" date NOT NULL, "amount" integer NOT NULL, "status" character varying(255) NOT NULL, CONSTRAINT "PK_15d25c200d9bcd8a33f698daf18" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "test-facility" ADD CONSTRAINT "FK_019deaff3c8726ce53cf857aebf" FOREIGN KEY ("customerId") REFERENCES "test-customer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "test-facility" DROP CONSTRAINT "FK_019deaff3c8726ce53cf857aebf"`);
        await queryRunner.query(`DROP TABLE "invoice"`);
        await queryRunner.query(`DROP TABLE "payment"`);
        await queryRunner.query(`DROP TABLE "test-facility"`);
        await queryRunner.query(`DROP TYPE "public"."test-facility_status_enum"`);
        await queryRunner.query(`DROP TABLE "test-customer"`);
        await queryRunner.query(`DROP TYPE "public"."test-customer_status_enum"`);
    }
}
exports.GeneratedMigration1763393268702 = GeneratedMigration1763393268702;
//# sourceMappingURL=1763393268702-generated-migration.js.map